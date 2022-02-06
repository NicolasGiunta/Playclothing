const express = require("express");
const app = express();
const path = require("path");
const PUERTO = 3000;
const productRoutes = require("./routes/productsRoutes");
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const shopRoutes = require("./routes/shopRoutes");
const usersAPIRoutes = require("./routes/apiRoutes/usersAPIRoutes");
const productsAPIRoutes = require("./routes/apiRoutes/productsAPIRoutes");
const userLoggedMiddleware = require('./middlewares/userLogged')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const methodOverride = require ("method-override");


app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
}))
app.use(cookieParser());


app.use(methodOverride('_method'));

app.use(express.json());


app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(userLoggedMiddleware)

// Rutas de API
app.use("/api/users", usersAPIRoutes)
app.use("/api/products", productsAPIRoutes)

// Rutas de navegador

app.use("/", mainRoutes);

app.use("/producto", productRoutes);

//por cambiar

app.use("/cuenta", usersRoutes);

app.use("/carrito",shopRoutes);



app.listen(PUERTO, () => {
  console.log("Andando sin problema en puerto " + PUERTO);
});
