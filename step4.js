var https = require('https');

function getHTML (options, callback) {

  var allData = "";

  https.get(options, function(response) {
    
    response.setEncoding('utf8');
    
    response.on('data', function(data){
      allData += data;
      console.log("Chunk received" + "\n");
    });

    response.on('end', function() {
      console.log('Stream complete.' + "\n");
      callback(allData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);