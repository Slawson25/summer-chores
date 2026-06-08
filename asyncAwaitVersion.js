function mowYard(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to mow the yard...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} mowed the yard.\n`);
            resolve(); 
        }, 2000);
    });
}

function weedEatYard(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to weedeat the yard...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
            resolve();
        }, 1500);
    });
}

function trimHedges(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is started to trim the Hedges...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} trimed the Hedges.\n`);
            resolve();
        }, 1000);
    });
}

function collectWood(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is going to collect wood...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} collected the wood.\n`);
            resolve();
        }, 1800);
    });
}

// --- UPDATED FUNCTION ---
function waterGarden(personName) {
    return new Promise((resolve, reject) => {
        console.log(`${personName} is starting to water the garden...`);
        
        setTimeout(() => {
            
            reject(`😴 Oh no! ${personName.toUpperCase()} fell fast asleep with the hose running!`);
        }, 1200);
    });
}

// --- UPDATED CHORE DAY RUNNER ---
async function startChoreDay() {
    console.log("--- Chore Day Starts Now --- \n");

    try {
        await mowYard("Alex");
        await weedEatYard("Alex");
        await trimHedges("Alex");
        await collectWood("Alex");
        await waterGarden("Alex"); 

        console.log("Alex is finally done with all the chores!");

    } catch (sleepMessage) {
        console.log(sleepMessage);
        console.log("❌ The chore day was cut short because Alex is snoring.");
    }
}

// Run the schedule
startChoreDay();