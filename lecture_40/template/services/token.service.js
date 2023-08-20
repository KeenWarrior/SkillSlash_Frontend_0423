const jwt = require('jsonwebtoken');
const Token = require('../models/token.model');
const createToken = async (user, tokenType, expiration) => {
    const payload = {
        sub : user.id,
        iat : Date.now(),
        exp : Date.now() + (expiration * 1000 * 60),
        type : tokenType,
        name: user.name,
        email: user.email,
    }

    const token = await jwt.sign(payload, process.env.JWT_SECRET);

    await Token.create({
        token,
        user: user.id,
        type: tokenType,
        expires: new Date(payload.exp),
    });

    return token;
}

module.exports = {
    createToken
}