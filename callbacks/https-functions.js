var https = require('https');

module.exports = function getHTML (options, callback) {
  
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
};