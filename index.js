const express = require("express");
const morgan = require("morgan");
var cors = require('cors');
var cookieparser = require("cookie-parser");
const app = express();
const {mongoose} = require("./database");

//midware


app.use(cookieparser());
app.use(cors());
app.use(express.static("./public"));
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/noticias",require("./routes/route_noticias"));
app.use("/api/users",require("./routes/route_users"));
app.use("/api/clases",require("./routes/route_clases"));
app.use("/api/freelancers",require("./routes/route_freelancers"));
app.use("/api/products",require("./routes/route_products"));
app.use("/api/wallets",require("./routes/route_walletlinks"));
app.use("/api/transaccions",require("./routes/route_transaccions"));
app.use("/api/telegrambot",require("./routes/route_telegrambot"));
app.use("/api/notificaciones",require("./routes/route_notificaciones"));
app.use("/api/servicios",require("./routes/route_servicios"));
app.use("/api/transaccionsmc",require("./routes/route_transaccionsmc"));
app.use("/api/tarjetas",require("./routes/route_tarjetas"));

//config
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server running");
});