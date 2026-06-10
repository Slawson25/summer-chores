
function mowYard(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to mow the yard...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} mowed the yard.\n`);
            resolve(); 
        }, 2000);
    });
}

function weedEatYard(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to weedeat the yard...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
            resolve();
        }, 1500);
    });
}

function trimHedges(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is started to trim the Hedges...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} trimed the Hedges.\n`);
            resolve();
        }, 1000);
    });
}

function collectWood(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is going to collect wood...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} collected the wood.\n`);
            resolve();
        }, 1800);
    });
}

function waterGarden(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to water the garden...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} watered the garden.\n`);
            resolve();
        }, 1200);
    });
}


function startChoreDay() {
    console.log("--- Chore Day Starts Now --- \n");

    
    mowYard("Alex")
        
        .then(() => {
            return weedEatYard("Alex");
        })
        .then(() => {
            return trimHedges("Alex");
        })
        .then(() => {
            return collectWood("Alex");
        })
        .then(() => {
            return waterGarden("Alex");
        })
        .then(() => {
            
            console.log("Alex is finally done with all the chores!");
        })
        
        .catch((sleepMessage) => {
            console.log(sleepMessage);
            console.log("❌ The chore day was cut short because Alex is snoring.");
        });
}

// Run the schedule
startChoreDay();