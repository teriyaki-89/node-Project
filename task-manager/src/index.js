const express = require("express");

require("./db/mongoose");
const User = require("./models/user");
const Tasks = require("./models/tasks");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
    //console.log(req.body);
    const user = new User(req.body);
    user.save()
        .then(result => {
            res.status(200);
            res.send(result);
        })
        .catch(e => {
            res.status(400);
            res.send(e);
        });
});

app.post("/tasks", (req, res) => {
    const user = new Tasks(req.body);
    user.save()
        .then(result => {
            res.status(200);
            res.send(result);
        })
        .catch(e => {
            res.status(400);
            res.send(e);
        });
});

app.listen(port, () => {
    console.log("server is up on port " + port);
});
