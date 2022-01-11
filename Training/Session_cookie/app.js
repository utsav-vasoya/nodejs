const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const appController = require("./controllers/appController");
const isAuth = require("./middleware/is-auth");
const app = express();

mongoose.connect("mongodb://localhost:27017/sessions"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, console.log("MongoDB connected"));

const store = new MongoDBStore({
  uri: "mongodb://localhost:27017/sessions",
  collection: "mySessions",
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "yutyutyutyuyt",
    resave: true,
    saveUninitialized: false,
    store: store,
  })
);

app.get("/", appController.landing_page);
app.get("/login", appController.login_get);
app.post("/login", appController.login_post);
app.get("/register", appController.register_get);
app.post("/register", appController.register_post);
app.get("/dashboard", isAuth, appController.dashboard_get);
app.post("/logout", appController.logout_post);

app.listen(5000, console.log("App Running on http://localhost:5000"));
