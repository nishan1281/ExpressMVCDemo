//express framework requiring
const express = require('express');
const app = express();

//port declaration can be done by .env
const PORT = 3000;

//for POST requests by builtin urlencoded perser by express.
//It can also be done by bodyperser API call. For bodyperser extended will be false.
app.use(express.urlencoded({ extended:true}));

//MODEL: default value of array
const users = [
   {
    name: 'Nishan',
    age: 36
   },

    {
    name: 'Mishal',
    age: 32
    }
]

//UI HTML CODS
const htmlForm = `
<form method  = "POST" action ="/users">
<input type = "text" name = "name" placeholder = "Enter name"/>
<input type = "number" age = "age" placeholder = "Enter age"/>
<button type = "submit">Save</button>
</form>
`;   //mendetory of semiclonee

//routing
app.get("/users", (req, res) => {
    res.send(htmlForm);
})

//Handling of the POST data after clicking submit buttom in html form by user. 
app.post("/users", (req, res) => {
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
});


//for wrong request by clint
app.use((req, res, next) => {
    res.status(404).json({message: "resource not found"});
})

//swerver convigaration for listening port
app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}`);
});