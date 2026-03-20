const express = require('express');
const app = express();
const { json } = require('body-parser');
const routes = require('./routes');
const middleware = require('./middleware');
const config = require('./config');

app.use(json());
app.use(middleware);
app.use('/api', routes);

const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
