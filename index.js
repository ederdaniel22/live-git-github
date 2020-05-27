const express = require("express");

const app = express()

//criar rotas
app.get("/teste", (req, res) => {
    return res.json({ hello: 'world' })
});
app.listen(3333);