const PersonController = module.exports;
const PersonService = require('../services/PersonService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PersonController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await PersonService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

PersonController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const person = await PersonService.find(id);

    if (!person) return next(new ErrorHandler.BaseError('person not exists', 404));

    return res.send(person);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

PersonController.edit = async (req, res, next) => {
  try {
    const { params: { id }, body } = req;
    const person = await PersonService.edit(id, body);

    if (!person) return next(new ErrorHandler.BaseError('person not exists', 404));

    return res.send(person);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

PersonController.delete = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const person = await PersonService.delete(id);

    if (!person) return next(new ErrorHandler.BaseError('person not exists', 404));

    return res.status(200).send(person);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

PersonController.findByName = async (req, res, next) => {
  try {
    const { query: { name } } = req;
    const persons = await PersonService.findByName(name);

    if (persons.length === 0) return res.status(204).send(persons);

    return res.send(persons);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

PersonController.listAll = async (req, res, next) => {
  try {
    const persons = await PersonService.listAll();
    if (persons.length === 0) return res.status(204).send(persons);

    return res.send(persons);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
