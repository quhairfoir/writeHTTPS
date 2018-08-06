var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var dataChunks = "";

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      dataChunks += data;
      console.log("Chunk received: " + "\n");
    });

    response.on('end', function() {
      console.log('Stream complete.');
      console.log(dataChunks);
    });
  });
}

getAndPrintHTML();