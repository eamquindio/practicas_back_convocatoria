const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const ConvocatoriaRepository = require('../../app/repositories/AnnouncementRepository');
const Helper = require('../Helper');

const API = '/api/convocatiorias-ms/convocatorias';
chai.use(chaiHttp);

describe('Announcement CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });
  it('create Announcement test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      fecha_inicio: '2019-08-24',
      fecha_final: '2019-08-24',
      id_empresa: 1,
      tipo_practica: 'horas',
      id_facultad: 1,
      id_programa: 1,
      id_ciclo: 1,
      estado: 'activo',
      numero_estudiantes: 3,
      id_coordinador: 1,
    })
    .then(async () => {
      const convocatoriaToAssert = await ConvocatoriaRepository.find(1);
      assert.equal(convocatoriaToAssert.id, 1);
    }));

  it('create Announcement already exists test', async () => {
    await ConvocatoriaRepository.create({
      id: 1,
      fecha_inicio: '2019-08-24',
      fecha_final: '2019-08-24',
      id_empresa: 1,
      tipo_practica: 'horas',
      id_facultad: 1,
      id_programa: 1,
      id_ciclo: 1,
      estado: 'activo',
      numero_estudiantes: 3,
      id_coordinador: 1,
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        fecha_inicio: '2019-08-24',
        fecha_final: '2019-08-24',
        id_empresa: 1,
        tipo_practica: 'horas',
        id_facultad: 1,
        id_programa: 1,
        id_ciclo: 1,
        estado: 'activo',
        numero_estudiantes: 3,
        id_coordinador: 1,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
  it.only('find Announcement by filter test', async () => {
    await ConvocatoriaRepository.create([{
      id: 1,
      fecha_inicio: "2019-08-24",
      fecha_final: "2019-08-24",
      id_empresa: 1,
      tipo_practica: 'horas',
      id_facultad: 1,
      id_programa: 1,
      id_ciclo: 1,
      estado: 'activo',
      numero_estudiantes: 3,
      id_coordinador: 1,
    }, {
      id: 2,
      fecha_inicio: "2019-08-24",
      fecha_final: "2019-08-24",
      id_empresa: 2,
      tipo_practica: 'objetivo',
      id_facultad: 2,
      id_programa: 2,
      id_ciclo: 2,
      estado: 'activo',
      numero_estudiantes: 4,
      id_coordinador: 2,
    }]);

    return chai
      .request(app)
      .get(`${API}/list?id_programa=1&tipo_practica=horas&id_ciclo=1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body[0], {id: 1,
          fecha_inicio: "2019-08-24",
          fecha_final: "2019-08-24",
          id_empresa: 1,
          tipo_practica: 'horas',
          id_facultad: 1,
          id_programa: 1,
          id_ciclo: 1,
          estado: 'activo',
          numero_estudiantes: 3,
          id_coordinador: 1 });
      });
  });

  it.only('find Announcement by filter empty test', async () => chai
    .request(app)
    .get(`${API}/list?id_programa=1`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
