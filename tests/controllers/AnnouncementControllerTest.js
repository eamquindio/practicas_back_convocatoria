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
});

it('edit Announcement test', async () => {
  await ConvocatoriaRepository.create({
    id: 1,
    tipo_practica: 'horas',
  });

  return chai
    .request(app)
    .put(`${API}/1`)
    .send({ tipo_practica: 'objetivos' })
    .then(async () => {
      const convocatoriaToAssert = await ConvocatoriaRepository.find(1);
      assert.equal(convocatoriaToAssert.tipo_practica, 'objetivos');
    });
});

it('edit announcement nof found test', async () => chai
  .request(app)
  .put(`${API}/1`)
  .send({
    id: '1',
    fecha_inicio: '2019-05-13',
    fecha_final: '2019-04-13',
    id_empresa: 1,
    tipo_practica: 'objetivos',
    id_facultad: 2,
    id_programa: 2,
    id_ciclo: 1,
    estado: 'inactivo',
    numero_estudiantes: 1,
    id_coordinador: 2,
  })
  .catch((error) => {
    assert.equal(error.status, 404);
  }));
