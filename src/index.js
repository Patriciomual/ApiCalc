    const express = require("express");
    const app = express();
    const morgan = require('morgan');//shows server activity in terminal.

    //settings
    app.set('port',process.env.PORT || 3000);
    //the process.env.port argument is added in the case that this api is mounted in cloud services.

    //middlewares
    app.use(morgan('dev'));
    app.use(express.json());

    //security
    app.disable('x-powered-by'); //disable x-powered-by header

    //routes
    app.use('/pi', require('./routes/piCalc'))
    app.use('/', require('./routes/index'))

    //starting the Server
    app.listen(app.get('port'), () => {
        console.log(`The server is initialized on port ${app.get('port')}`);
    }); 