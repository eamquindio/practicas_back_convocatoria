const ClosingReasonService = module.exports;
const ClosingReasonRepository = require('../repositories/ClosingReasonRepository');

ClosingReasonService.listAll = () => {
  console.log('find all ClosingReason');

  return ClosingReasonRepository.listAll();
};
