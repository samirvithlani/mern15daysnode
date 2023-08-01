const roleSchema = require('../model/RoleModel');

const createRole = (req, res) => {

    var role = new roleSchema(req.body);
    role.save().then((data) => {
        res.status(201).json({
            flag:1,
            data:data,
            message:"Role created successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            flag:0,
            message:err.message
        });
    });
}
const getRole = (req, res) => {
    roleSchema.find().then((data) => {
        res.status(200).json({
            flag:1,
            data:data,
            message:"Role fetched successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            flag:0,
            message:err.message
        });
    })
}
module.exports = {
    createRole,
    getRole
}