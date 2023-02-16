const app = require('./index');

require('dotenv').config();


const connect = require("./config/db");

const port = process.env.PORT || 8080;

app.listen(port, async function () {
  await connect();
  console.log(`server is running at http://localhost:${port}`);
})