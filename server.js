const express = require('express')
// const { dirname } = require('path')
const conn = require('./db_connection')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')
// const {loadUser} = require('./usersData')
// const { randomUUID } = require('crypto')
const path = require('path')

const host = 'localhost'
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

// Session
// Secure Cookies in production
app.use(session({
  secret:'this is a secret',
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:60000},
}))

// Setting an instance of the connect-flash middleware
app.use(flash())

// This function checks if the user is logged,Redirects to a specific route if the user is still logged in
function isAuthentified(req, res, next){
  if(req.session.user) next()
  else next('route')
}

// The server will send this route if the user is logged 
app.get('/', isAuthentified, (req,res)=>{
  res.render('pages/agendamento', {
    user: req.session['user'].first_name
  })
})

// Route referring to the main page
app.get('/', (req, res) => {
  res.render('pages/index')
})

// Routes referring to Login
app.get('/login', (req, res) => {
  res.render('pages/login',{message:req.flash('error')})
})

// Route that receives the request body and inserts the data into the database
app.post('/login', (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const user = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    user_password: password
  }

  conn.promise().query(`INSERT INTO users SET ?`, user)

    .then(([results, fields]) => {
      console.log('Processo realizado com sucesso!')
      console.log(results)
    })
    .catch(error => {
      console.log('ERRO!\n')
      console.log(error)
    })

  res.redirect('/login')
})

// Route to render the Register page
app.get('/register', (req, res) => {
  res.render('pages/register')
})

// Routes referring to the Agendamento page
// Render the agendamento page
app.get('/agendamento', (req, res) => {
  res.render('pages/agendamento')
})


// Route for user authentication
app.post('/agendamento', (req, res) => {
  //Creating variables to receive the email and password values from the request body
  const { email, password } = req.body

  // Creating and regerating sessions
  req.session.regenerate((err)=> {
    if(err) next(err)
    
    // Check if the user exists in the Mysql database
    conn.promise().query(`SELECT * FROM users WHERE email = "${email}" `)
    
    .then(([rows, fields]) => {
      const user = rows[0]
      // If the user data variable user is not null
      if(user){
        // If the email and password match
        if(user.user_password === password){
          // Stores the user information in session
          req.session['user'] = user

          // Saves the session
          req.session.save((err) =>{
              if (err) next(err)
              // Renders the agendemento page
              // Object is sended to be received through the page in ejs format
              res.render('pages/agendamento', {
                // the 'user' object receives as a property value the first name of the user through the saved session
                user: req.session['user'].first_name})
            })
  
        }else{
          // Only the given password is wrong!
          req.flash('error', 'Senha errada!')
          res.redirect('/login')
          // reestablish the connection to the database
          connectDB(conn)
        }
      }else{
        //Only if the given email is wrong or doesn't exist
        req.flash('error', 'Email não registrado!')
        res.redirect('/login')
        connectDB(conn)
      }
      })
      
      .catch((err) => {
        console.log('ERROR!\n',err)
      })
  })
  
})

// LOGOUT
app.get('/logout', (req, res)=>{
  // User session is null
  req.session['user'] = null
  req.session.save((err)=>{
    if(err) next(err)
    // Redirects to the main page
    res.redirect('/')
  })
})

// Server will be running on http://localhost:8000
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})


// Function to connect with the database
function connectDB(db) {
  db.connect(err => {
    if (err) throw err
    return 'Database is connected!'
  })
}
