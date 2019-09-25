const net = require('net');
/*  
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.254',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //log incoming data to the console
  conn.on('data', (data) => {
    console.log('--:', data)
  })

  //log message to console when connected to server
  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: BOI");
    
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   }, 1000); //move down one square (unless facing up)
  });
  return conn;
};


// console.log('Connecting ...');
// connect();

module.exports = { connect };