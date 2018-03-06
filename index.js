const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5577

express()
  .listen(PORT, () => {console.log(`Listening on ${ PORT }`);
    console.log();}
  );
  express().get('/user', function(request, response){
    response.send('user ' + request.params.id);
  });
