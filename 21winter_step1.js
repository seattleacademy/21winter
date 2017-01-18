console.log("hello world");

var http = require("http");

//use ports between 1500 & 1599
http.createServer(alexaServer).listen(1501);

function alexaServer(req, res) {
    echoResponse = {};
    echoResponse.version = "1.0";

    echoResponse.response = {}
    echoResponse.response.outputSpeech = {};
    echoResponse.response.outputSpeech.type = "PlainText";
    echoResponse.response.outputSpeech.text = "hello world";
    echoResponse.response.shouldEndSession = true;

    myResponse = JSON.stringify(echoResponse);
    res.end(myResponse);
};