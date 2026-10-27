import { HttpError, notImplemented } from '../shared/http-error.js';
export function requireRole(...roles) {
  return function checkRole(req, res, next) {
    // MES 1 - TODO 
    let user = req.user;
    if (!roles.includes(user.role)) {
      throw new HttpError(403, 'FORBIDDEN', 'Accès refusé.');
    }
     next();
  };
}
