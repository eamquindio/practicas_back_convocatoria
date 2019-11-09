const ClosingReasonController = module.exports;
const ClosingReasonService = require('../services/ClosingReasonService');

ClosingReasonController.listAll = async (req, res, next) => {
  try {
    const closingReason = await ClosingReasonService.listAll();
    if (closingReason.length === 0) return res.status(204).send(closingReason);

    return res.send(closingReason);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

ClosingReasonController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await ClosingReasonService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
