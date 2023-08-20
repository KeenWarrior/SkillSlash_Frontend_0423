const userServices = require("../services/user.service");
const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");

const register = async (req, res) => {
    try{
        const user = await userServices.createUser(req.body);
        if(!user) {
            return res.status(400).json({message: "Bad request"});
        }
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

const login = async (req, res) => {
    try {
        console.log("login");
        const user = await authService.login(req.body.email, req.body.password);
        if(!user) {
            return res.status(401).json({message: "Unauthorized"});
        } else {
            const token = await tokenService.createToken(user, "access", 30);
            console.log(token);
            res.json({user, token});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  
};

module.exports = {
    register,
    login
}

