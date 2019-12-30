const express = require('express');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const question = require('./routes/api/question');

const app = express();


// DB Config
connectDB();


// Use Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/question', question);


app.get('/',(req,res) => res.send('API Running') )
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));  