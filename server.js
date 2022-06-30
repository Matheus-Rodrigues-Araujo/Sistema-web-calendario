const express = require('express')
const app = express()
const {loadUser} = require('./usersData')
const { randomUUID } = require('crypto')
const path = require('path')
const fs = require('fs')
const { response } = require('express')
let log
// const session = require('express-session')

const host = 'localhost'
const port = 8000

let users = []
let events = []

fs.readFile('users.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    users = JSON.parse(data)
  }
})

function accessUsersFile() {
  fs.writeFile('users.json', JSON.stringify(users), error => {
    if (error) {
      console.log(error)
    } else {
      console.log('user inserido!')
    }
  })
}


app.use(express.json())

app.use(express.urlencoded())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('/index.html')
})


app.post('/Login/loginPage.html', (req, res) => {
  // res.send('Usuário registrado!')
  const { name, email, password } = req.body

  const user = {
    id: randomUUID(),
    name: name,
    email: email,
    password: password,
    events: []
  }
  users.push(user)
  accessUsersFile()
  // res.json()
  res.redirect('/agendamento/agendamento.html')
})


app.post('/agendamento/agendamento.html', (req, res) => {
  loginUser(req,res, users)
    // res.redirect('/Login/loginPage.html')
})

app.post('/agendamento/agendamento.html', (req, res) => {
  res.send('sadasddasdasd')
})

app.get('/agendamento/agendamento.html', (req, res) => {
  res.send({'name': 'dsdasdadsd'})
})

// Load The JSON file
app.get('/users', (req, res)=>{
  res.send(loadUser())
})


app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})

function loginUser(req, res, userData) {
  const email = req.body.email
  const password = req.body.password
  userData.forEach(e => {
    if(e.email === email && e.password === password){
      res.redirect('/agendamento/agendamento.html')
      return userLogged(e)
    }
  });
}

function userLogged(user){
  const userProfile = {
    "username": user.name,
    "email": user.email,
    "password": user.password 
  }
  return userProfile.username
}

