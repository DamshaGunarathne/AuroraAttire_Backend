// 'use strict';
// const express = require('express');
// const config = require('./config');
// const cors = require('cors')
// const bodyParser = require('./routes/myRoutes');
// const userRoutes = require('./routes/myRoutes');

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', userRoutes.routes);
'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const userRoutes = require('./routes/myRoutes');

const app = express();
app.use(express.json()); // This line replaces bodyParser.json()
app.use(cors());
app.use('/api', userRoutes.routes);

app.listen(config.port, config.host, () => {
    console.log(`Server is running on ${config.host}:${config.port}`);
});
