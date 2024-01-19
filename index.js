const express = require("express");
const routerClient = require("./route/client/index.route");
const database = require("./config/database");

database();

const app = express();
const port = 3000;

app.use(express.static('public'))

app.set('views', './views');
app.set('view engine', 'pug');

routerClient(app);

app.listen(port, () => {
    console.log("Đang chạy trên port: ", port);
});

