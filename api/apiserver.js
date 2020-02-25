const express = require("express");
require("dotenv").config();
const { connectingDB } = require("./db.js");
const { installHandler } = require("./api_handler.js");
const app = express();

installHandler(app);

const port = process.env.API_SERVER_PORT || 2000;

(async function() {
  try {
    await connectingDB();
    app.listen(port, () => {
      console.log(`Api Server started on ${port}`);
    });
  } catch (err) {
    console.log("error", err);
  }
})();
