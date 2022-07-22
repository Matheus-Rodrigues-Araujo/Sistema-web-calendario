const mysql2 = require('mysql2')
const conn = mysql2.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'sistema_web' // // Replace with your database Name
});

module.exports = conn

// Adaptar posteriormente as futuras consultas
// conn.promise().query('SELECT * FROM users')

// .then(
//   ([rows, fields])=>{
//     console.log('Resultado\n', rows)
//   }
// )

// .catch(
//   (err)=>{
//     console.log('ERRO!\n',err)
//   }
// )

// .then(
//   ()=>{
//     conn.end()
//     console.log('Conexão encerrada!')
//   }
// )