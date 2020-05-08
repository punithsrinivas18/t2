const Workout = [
    {
        goal: "Keep working. Workout more to be fit!"
    }
];

function addGoalWork(goal) {
    Workout.push({goal:goal});
    return true;
};

function removeGoalWork(i){
    Workout.splice(i,1);
    return true;
    };

module.exports = {
    Workout,
    addGoalWork,
    removeGoalWork
}