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
