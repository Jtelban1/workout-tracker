const router = require('express').Router();
const Workout = require('../models/workout.js');

// get all
router.get('/api/workouts', function(req, res){
    Workout.find({}).then(function(workouts){
        res.json(workouts);
    })
});
// add exercise
router.put('/api/workouts/:id',function(req,res){
    Workout.findOne({_id:req.params.id}).then(function(workout){
        workout.exercises.push(req.body);

        Workout.findOneAndUpdate({_id:req.params.id},{exercises:workout.exercises},(err, doc,op)=>{
            if(err) throw new err;
        });
        res.json(workout);
    })
});
// create workout
router.post('/api/workouts', function (req, res) {
    Workout.create({}, function(err, newWorkout){
        if(err) throw new err;
        res.json(newWorkout)
    })
});
// range
router.get('/api/workouts/range', function(req, res){
    Workout.find({}).then(function(workouts){
        res.json(workouts);
    })
});


module.exports = router;


