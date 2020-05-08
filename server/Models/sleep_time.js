const Sleep = [
    {Date:"3/22/19", Hours: 6}
]

function addHours(date, Hours){
    Sleep.push({Date:date, Hours:hours});
    return Sleep;
};

function removeHours(i){
    Sleep.splice(i,1);
    return true
}

module.exports = {
    Sleep,
    addHours,
    removeHours
}