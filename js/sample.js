// main.js
// require the hello module (hello.js) var hello = require('./hello');
var h = new hello();
h.world();
// hello.js
function Hello(){
}
Hello.prototype.world= function(){
console.log('Hello World'); 
return ‘Hello World’;
}
module.exports = Hello;