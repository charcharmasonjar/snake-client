// const net = require('net');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }

// console.log('Connecting ...');
// connect();

// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();