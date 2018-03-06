const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5577

express()
  .listen(PORT, (req,res) => {console.log(`Listening on ${ PORT }`

    console.log("Hi I am just a porint line for req and res "+req+res)

  }))
