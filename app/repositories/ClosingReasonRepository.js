const ClosingReasonRepository = module.exports;
const DB = require('../utils/DB');

ClosingReasonRepository.listAll = () => DB('closingReason').select('*');

ClosingReasonRepository.create = closing => DB('closingReason').insert(closing).returning('*');
