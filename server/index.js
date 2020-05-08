const express = require('express');
	const path = require('path');
	

	
	const exercisesController = require('./controller/Exercises');
	const workoutController = require('./controller/Workouts');
	const sleepController = require('./controller/sleep_time');
	const usersController = require('./controller/users');
	
	

	

	const app = express();
	const port = 3000;
	

	app.use(function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*"); 
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	    next();
	});
	

	app.use(function(req, res, next) {
	    const arr = (req.headers.authorization || "").split(" ");
	    if(arr.length > 1 && arr[1] != null){
	        req.userID = +arr[1];
	    }
	    next();
	});
	//
	app
	    .use(express.json())
	    .use(express.urlencoded({ extended: true }))
	    //.use(express.static( __dirname + '/../client/dist'))
	 
	    .use('/Exercises', exercisesController)
	    .use('/workouts', workoutController)
	    .use('/sleep_time', sleep_timeController)
	    .use('/users', usersController)
	    .use( (err, req, res, next ) => {
	        console.error(err);
	        const errorCode = err.code || 500;
	        res.status(errorCode).send({ message: err.message });
	    } )
	

	app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

