const PersonService = module.exports;
const PersonRepository = require('../repositories/PersonaRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PersonService.create = async (person) => {
  console.log('creating person');

  const personToValidate = await this.find(person.id);
  console.log(personToValidate);
  if (personToValidate) throw ErrorHandler.BaseError('person already exists', 409);

  return PersonRepository.create(person);
};

PersonService.find = (person) => {
  console.log('find person');

  return PersonRepository.find(person);
};

PersonService.edit = (id, person) => {
  console.log('edit person');

  return PersonRepository.edit(id, person);
};

PersonService.delete = (id) => {
  console.log('delete person');

  return PersonRepository.delete(id);
};

PersonService.findByName = (name) => {
  console.log('findByName person');

  return PersonRepository.findByName(name);
};

PersonService.listAll = () => {
  console.log('find all person');

  return PersonRepository.listAll();
};
