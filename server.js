const express = require('express');
const app = express();

const PORT = 8080;
app.get("/", (req, res)=>{
    console.log(res.header)
    res.send("Hello World");
});
app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})