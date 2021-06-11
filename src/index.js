const app = require('./config/express');
const { port } = require('./config/var');
const mongoose = require('./config/mongoose');

mongoose.connect();

app.listen(port, () => console.info(`server started on port ${port}`));

module.exports = app;