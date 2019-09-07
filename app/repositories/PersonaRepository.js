const PersonaRepository = module.exports;
const DB = require('../utils/DB');

PersonaRepository.create = person => DB('persons').insert(person).returning('*');

PersonaRepository.edit = (id, person) => DB('persons').update(person).where({ id }).returning('*');

PersonaRepository.delete = id => DB('persons').del().where({ id }).returning('*');

PersonaRepository.find = id => DB('persons').select('*').where({ id }).first();

PersonaRepository.findByName = name => DB('persons').select('*').where({ name });

PersonaRepository.listAll = () => DB('persons').select('*');

