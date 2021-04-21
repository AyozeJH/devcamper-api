const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');

// Check existence and ownership of resource
exports.checkExistence = (model, param) =>
  asyncHandler(async (req, res, next) => {
    let resource = await model.findById(req.params.id);
    // Check that resource exists
    if (!resource) {
      return next(
        new ErrorResponse(`${param} not found with id: ${req.params.id}`, 404)
      );
    }
    next();
  });