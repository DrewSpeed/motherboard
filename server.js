const db = require("./config/connection.js");
const express = require('express');
const apiRoutes = require('./routes/api/searchRoutes');
const htmlRoutes = require('./routes/html/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

// not found response for unmatched routes


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
} )
