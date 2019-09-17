const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const ConvocatoriaRepository = require('../../app/repositories/PersonAnnRepository');
const Helper = require('../Helper');

const API = '/api/convocatiorias-ms/convocatorias';
chai.use(chaiHttp);

describe('PersonAnnouncement CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });
  it.only('create PersonAnnouncement test', () => chai
    .request(app)
    .post(`${API}/1/inscripcion`)
    .send({
      id: 1,
      estudiante_id: 1,
      Convocatoria_Codigo: 1,
    })
    .then(async () => {
      const convocatoriaToAssert = await ConvocatoriaRepository.find(1);
      assert.equal(convocatoriaToAssert.id, 1);
    }));

  it('create PersonAnnouncement already exists test', async () => {
    await ConvocatoriaRepository.create({
      id: 1,
      estudiante_id: 1,
      Convocatoria_Codigo: 1,
    });
    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        estudiante_id: 1,
        Convocatoria_Codigo: 1,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
