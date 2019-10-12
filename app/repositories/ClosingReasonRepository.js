const ClosingReasonRepository = module.exports;
const DB = require('../utils/DB');

ClosingReasonRepository.createClosingReason = closingReason => DB('closingReason').insert(closingReason).returning('*');

ClosingReasonRepository.listAll = () => DB('closingReason').select('*');
