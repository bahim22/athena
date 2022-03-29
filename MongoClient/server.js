const express =  require('express')
const app = express()
const cors = require('cors')
require ('dotenv').config({ path: './.env'})
const port = process.env.PORT || 7222
app.use(cors())
app.use(express.json())
// app.use(require('./routes/record'));

// get driver connection
const dbo = require('./db/conn')

app.listen(port, () => {
  // perform db connect on server start
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server running on port: ${port}`)
});
//////////////////////////////////////
// const express = require('express');
// const path = require('path');
// // const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(5222);
