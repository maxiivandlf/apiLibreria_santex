const SERVER_SECRET = 'SecretoQueSoloConoceElServer';

const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },

    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const userIsAdminMDW = (req, res, next) => {
  return passport.authenticate('jwt', { session: false }, (err, user, info) => {
    console.log(user.role);
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (user.role !== 'Admin') {
      return res.status(401).json({
        message: 'Unauthorized, not admin',
      });
    }

    req.user = user;
    return next();
  })(req, res, next);
};

const authJWTMiddleware = passport.authenticate('jwt', { session: false });

module.exports = {
  SERVER_SECRET,
  authJWTMiddleware,
  userIsAdminMDW,
};
