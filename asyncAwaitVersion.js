// --- Promise-based Functions ---

function mowYard(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to mow the yard...`);

        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.00) {
                console.log(`${personName.toUpperCase()} accidentally mowed over the garden gnome!\n`);
            } else {
                console.log(`${personName.toUpperCase()} mowed the yard.\n`);
            }

            resolve(); // Notifies the await keyword that this task is complete
        }, 2000);
    });
}

function weedEatYard(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to weedeat the yard...`);

        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.10) {
                console.log(`${personName.toUpperCase()} fell asleep holding the weed eater!\n`);
            } else {
                console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
            }

            resolve();
        }, 1500);
    });
}

function trimHedges(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to trim the hedges...`);

        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.20) {
                console.log(`${personName.toUpperCase()} fell asleep while trimming the hedges!\n`);
            } else {
                console.log(`${personName.toUpperCase()} trimmed the hedges.\n`);
            }

            resolve();
        }, 1000);
    });
}

function collectWood(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is going to collect wood...`);

        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.15) {
                console.log(`${personName.toUpperCase()} fell asleep while collecting wood!\n`);
            } else {
                console.log(`${personName.toUpperCase()} collected the wood.\n`);
            }

            resolve();
        }, 1800);
    });
}

function waterGarden(personName) {
    return new Promise((resolve) => {
        console.log(`${personName} is starting to water the garden...`);

        setTimeout(() => {
            const chance = Math.random();

            if (chance < 0.50) {
                console.log(`Oh no! ${personName.toUpperCase()} fell fast asleep with the hose running!\n`);
            } else {
                console.log(`${personName.toUpperCase()} watered the garden.\n`);
            }

            resolve();
        }, 1200);
    });
}

// --- The Orchestrator (Async/Await) ---

async function runChoreDay(name) {
    await mowYard(name);
    await weedEatYard(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);
    
    console.log(`The chore day was cut short because ${name} is snoring.`);
}

// Execute the async flow
runChoreDay("Alex");