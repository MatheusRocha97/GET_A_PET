const express = require('express');
const cors = require ('cors');

const app = express();

// config JSON response
app.use(express.json());

// solve cors
app.use(cors( {credentials:true, origin: 'http://localhost:3000' }));  //3000 porta para o frontend

// public folder for images
app.use(express.static('public'));

// routes
const UserRoutes = require('./routes/UserRoutes');

app.use('/users', UserRoutes);

app.listen(5000 ); // porta para o backend
