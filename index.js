const express = require("express");
const routerClient = require("./route/client/index.route");


const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

routerClient(app);


app.listen(port, () => {
    console.log("port: ", port);
});

