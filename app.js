const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reportingsRoutes = require('./routes/reportings');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reporting', reportingsRoutes);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});