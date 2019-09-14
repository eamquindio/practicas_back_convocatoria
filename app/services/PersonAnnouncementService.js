const PersonService = module.exports;
const PersonRepository = require('../repositories/PersonAnnouncementRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PersonService.create = async (person) => {
  console.log('creating person');

  const personToValidate = await PersonRepository.find(person.id);
  
  if (personToValidate) throw ErrorHandler.BaseError('person already exists', 409);

  return PersonRepository.create(person);
};
