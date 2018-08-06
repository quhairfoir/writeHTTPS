var https = require('https');


function getAndPrintHTML (options) {

  var allData = "";

  https.get(options, function(response) {
    
    response.setEncoding('utf8');
    
    response.on('data', function(data){
      allData += data;
      console.log("Chunk received" + "\n");
    });

    response.on('end', function() {
      console.log('Stream complete. Data:' + "\n");
      console.log(allData);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
