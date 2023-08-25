
const server = require("./src/server");
const { conn } = require('./src/db.js');
require("dotenv").config();

const {PORT} = process.env || 3001;


conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
