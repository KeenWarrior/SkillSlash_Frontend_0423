const passportJWT = require("passport-jwt");
const config = require("./config");
const userServices = require("../services/user.service");


const options = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
}

const verify = async (payload, done) => {

    const expirationDate = new Date(payload.exp * 1000);

    if(expirationDate < new Date()) {
        return done(null, false);
    }

    const userId = payload.sub;

    try {
        const user = await userServices.getUserById(userId);
        if(!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}

const strategy  = new passportJWT.Strategy(options, verify);

module.exports = strategy;