"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//external import
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
//internal import
var db_1 = __importDefault(require("./src/util/db"));
var routes_1 = __importDefault(require("./src/routes"));
//middleware
require("dotenv").config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
// mongoDB connection, just pass the mongo url
new db_1.default(process.env.mongoURL);
app.use("/api", routes_1.default);
// default error handlers
var errorHandlers = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};
app.use(errorHandlers);
//routes
app.get("/", function (req, res) {
    res.send("Hello world!!");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
