//express framework requiring
const express = require('express');

//importing the routes module. Then access by app.use in other line
const userRouter = require("./routes/users.route");  
const app = express();

//port declaration can be done by .env
const PORT = 3000;

//for POST requests by builtin urlencoded perser by express.
//It can also be done by bodyperser API call. For bodyperser extended will be false.
app.use(express.urlencoded({ extended:true}));

//confirming use of routes module
app.use(userRouter);


//for wrong request by clint
app.use((req, res, next) => {
    res.status(404).json({message: "resource not found"});
})

//swerver convigaration for listening port
app.listen(PORT, ()=>{
    console.log(`Server running http://localhost:${PORT}`);
});