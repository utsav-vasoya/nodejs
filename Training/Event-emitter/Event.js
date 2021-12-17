var event = require('events');
var eventemitter = new event.EventEmitter();

//Create an event handler:
var eventhandler = () => {
    console.log("My first event");
}

//Assign the eventhandler to an event:
eventemitter.on('message', eventhandler);

//Fire the 'message' event:
eventemitter.emit('message');