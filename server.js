const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));

app.get(/.*/, (req, res) => {
    res.status(404).sendFile('./views/error.html', { root: __dirname }); 
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));