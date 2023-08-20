const dotenv = require('dotenv');
const Joi = require('joi');

dotenv.config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(5000),
    MONGO_URL: Joi.string().required().description('Mongo DB URL'),
    JWT_SECRET: Joi.string().required().description('JWT Secret Key'),
}).unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongo: {
        url: envVars.MONGO_URL,
    },
    jwt: {
        secret: envVars.JWT_SECRET,
    }
}


