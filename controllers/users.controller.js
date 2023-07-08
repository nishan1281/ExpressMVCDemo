 //Path module requires to load html file by routing. then use res.sendFile in get request.
const path = require("path");
const users = require("../models/users.model");

exports.getUsers =  (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html")) ; //to route at index HTML. 
};

exports.saveUser = (req, res) => {
    const name = req.body.name;     //procdur to receive the informations.
    const age = Number (req.body.age); //data pareses as string form. To convert to number.
    const user = {           //to store the data in a object.
        name,
        age
    }

    users.push(user); //to add new data in the default users array

    res.status(201).json({     //to send the status message along with new array data
        success: true,
        users
    })
}

