let express = require('express');
const { use } = require("express/lib/application");
let app = express();

const path = require('path');

app.use(express.static("public"));


app.listen(process.env.PORT || 3004,()=>console.log("Servidor corriendo en http://localhost:3004"));

app.get("/",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/home.html");
    res.sendFile(htmlPath);
});

app.get('/login', (req,res)=>{
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
});

app.get('/register', (req,res)=>{
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});

app.get('/search',(req,res)=>{
    res.send("Busqueda exitosa");
})