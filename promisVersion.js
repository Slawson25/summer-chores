
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

function waterGarden(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to water the garden...`);
        setTimeout(() => {
            console.log(`${personName.toUpperCase()} watered the garden.\n`);
            resolve();
        }, 1200);
    });
}

// 2. Create an async function to control the execution order
async function startChoreDay() {
    console.log("--- Chore Day Starts Now --- \n");

    // The 'await' keyword pauses the code until that specific Promise resolves
    await mowYard("Alex");
    await weedEatYard("Alex");
    await trimHedges("Alex");
    await collectWood("Alex");
    await waterGarden("Alex");

    console.log("Alex is finally done with all the chores!");
}

// 3. Run the schedule
startChoreDay();