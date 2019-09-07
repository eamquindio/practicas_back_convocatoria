const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const PersonaRepository = require('../../app/repositories/PersonaRepository');
const Helper = require('../Helper');

const API = '/api/users-ms/persons';
chai.use(chaiHttp);

describe('Person CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create person test', () => chai
    .request(app)
    .post(API)
    .send({ id: 1, name: 'camilo' })
    .then(async () => {
      const personToAssert = await PersonaRepository.find(1);
      assert.equal(personToAssert.name, 'camilo');
    }));

  it('create person already exists test', async () => {
    await PersonaRepository.create({ id: 1, name: 'camilo' });

    return chai
      .request(app)
      .post(API)
      .send({ id: 1, name: 'camilo' })
      .catch((error) => {
        assert.equal(error.status, 500);
      });
  });

  it('edit person nof found test', async () => chai
    .request(app)
    .put(`${API}/1`)
    .send({ name: 'juan' })
    .catch((error) => {
      assert.equal(error.status, 404);
    }));

  it('edit person test', async () => {
    await PersonaRepository.create({ id: 1, name: 'camilo' });

    return chai
      .request(app)
      .put(`${API}/1`)
      .send({ name: 'juan' })
      .then(async () => {
        const personToAssert = await PersonaRepository.find(1);
        assert.equal(personToAssert.name, 'juan');
      });
  });

  it('del person test', async () => {
    await PersonaRepository.create({ id: 1, name: 'camilo' });

    return chai
      .request(app)
      .del(`${API}/1`)
      .then(async () => {
        const personToAssert = await PersonaRepository.find(1);
        assert.equal(personToAssert, null);
      });
  });

  it('delete person nof found test', async () => chai
    .request(app)
    .del(`${API}/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));

  it('find person test', async () => {
    await PersonaRepository.create({ id: 1, name: 'camilo' });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, { id: 1, name: 'camilo' });
      });
  });

  it('find person not found test', async () => chai
    .request(app)
    .get(`${API}/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));

  it('find person by name test', async () => {
    await PersonaRepository.create([{ id: 1, name: 'camilo' }, { id: 2, name: 'claudia' }]);

    return chai
      .request(app)
      .get(`${API}/find_by_name?name=camilo`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body[0], { id: 1, name: 'camilo' });
      });
  });

  it('find person by name empty test', async () => chai
    .request(app)
    .get(`${API}/find_by_name?name=camilo`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));

  it('find all persons', async () => {
    await PersonaRepository.create([{ id: 1, name: 'camilo' }, { id: 2, name: 'claudia' }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it('find all person empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
