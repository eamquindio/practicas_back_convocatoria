const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const ConvocatoriaRepository = require('../../app/repositories/AnnouncementRepository');
const PersonAnnRepository = require('../../app/repositories/PersonAnnRepository');

const Helper = require('../Helper');

const API = '/api/convocatiorias-ms/convocatorias';
chai.use(chaiHttp);

describe('PersonAnnouncement CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it.only('create PersonAnnouncement test', async () => {
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
      .post(`${API}/1/inscripcion`)
      .send({
        id: 1,
        estudiante_id: 1,
        Convocatoria_Codigo: 1,
      })
      .then(async () => {
        const [convocatoriaToAssert] = await PersonAnnRepository.findByStudent(1)
        assert.equal(convocatoriaToAssert.estudiante_id, 1);
      });
  });

  it('create PersonAnnouncement not exists test', async () => {
    await ConvocatoriaRepository.create({
      id: 1,
      estudiante_id: 1,
      Convocatoria_Codigo: 1,
    });

    return chai
      .request(app)
      .post(`${API}/1/inscripcion`)
      .send({
        id: 1,
        estudiante_id: 2,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });
});
