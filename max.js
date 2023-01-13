
var maximumBags = function(capacity, rocks, addRocks) {

    let blank = [];

    for(let i = 0; i < rocks.length; i++){
        blank.push(capacity[i] - rocks[i]);
    }

    blank.sort((a,b) => (a-b));

    let count = 0; 

    for(let i = 0; i < blank.length; i++){
        if(blank[i] == 0) count++;
        else{
            if(blank[i] <= addRocks){
                addRocks -= blank[i];
                count++;
            }
            else break;
        }
    }

    return count;
    
};