const express = require('express');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const question = require('./routes/api/question');
const path = require('path');

const app = express();


// DB Config
connectDB();

// Init middleware
app.use(express.json({extended : false}));


// Use Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/question', question);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));  