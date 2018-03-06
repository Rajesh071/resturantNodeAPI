const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5577

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))