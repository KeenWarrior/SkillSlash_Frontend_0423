const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().min(3).max(8).required(),
    verified: Joi.boolean().default(true),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

const { error, value } = schema.validate({username: 'ab333333333333'});

console.log(error, value);