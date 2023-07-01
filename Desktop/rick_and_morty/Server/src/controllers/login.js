const users = require('../utils/users')

const login = (req, res)=>{
    const {email, password} = req.query;

    let access = false;
    users.forEach((user)=>{
        if(user.email === email && user.password === password) {
            // return res.status(200).json({access: true})
            access = true;
        }
    })
    return res.json({access: access})
//status(200).
};

module.exports = login;