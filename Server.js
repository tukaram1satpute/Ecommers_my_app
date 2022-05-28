const express = require("express");
const serverConfig = require('../config/server.config')
const app = express();
app.listen(serverConfig.PORT.env, () => {
    console.log(`Application is running on ${serverConfig.PORT}`)
})