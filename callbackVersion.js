// --- Callback-based Functions ---

function mowYard(personName, callback) {
    console.log(`${personName} is starting to mow the yard...`);

    setTimeout(() => {
        const chance = Math.random();

        
        if (chance < 0.15) { 
            console.log(`${personName.toUpperCase()} accidentally mowed over the garden gnome!\n`);
            
            callback(true, personName); 
        } else {
            console.log(`${personName.toUpperCase()} mowed the yard.\n`);
            
            callback(false); 
        }
    }, 2000);
}

function weedEatYard(personName, callback) {
    console.log(`${personName} is starting to weedeat the yard...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.10) {
            console.log(`${personName.toUpperCase()} fell asleep holding the weed eater!\n`);
            callback(true, personName);
        } else {
            console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
            callback(false);
        }
    }, 1500);
}

function trimHedges(personName, callback) {
    console.log(`${personName} is starting to trim the hedges...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.20) {
            console.log(`${personName.toUpperCase()} fell asleep while trimming the hedges!\n`);
            callback(true, personName);
        } else {
            console.log(`${personName.toUpperCase()} trimmed the hedges.\n`);
            callback(false);
        }
    }, 1000);
}

function collectWood(personName, callback) {
    console.log(`${personName} is going to collect wood...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.15) {
            console.log(`${personName.toUpperCase()} fell asleep while collecting wood!\n`);
            callback(true, personName);
        } else {
            console.log(`${personName.toUpperCase()} collected the wood.\n`);
            callback(false);
        }
    }, 1800);
}

function waterGarden(personName, callback) {
    console.log(`${personName} is starting to water the garden...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.50) {
            console.log(`Oh no! ${personName.toUpperCase()} fell fast asleep with the hose running!\n`);
            callback(true, personName);
        } else {
            console.log(`${personName.toUpperCase()} watered the garden.\n`);
            callback(false);
        }
    }, 1200);
}

mowYard("Alex", (didFail, name) => {
    if (didFail) return console.log(`The chore day was cut short because ${name} is snoring. 💤`);

    weedEatYard("Alex", (didFail, name) => {
        if (didFail) return console.log(`The chore day was cut short because ${name} is snoring. 💤`);

        trimHedges("Alex", (didFail, name) => {
            if (didFail) return console.log(`The chore day was cut short because ${name} is snoring. 💤`);

            collectWood("Alex", (didFail, name) => {
                if (didFail) return console.log(`The chore day was cut short because ${name} is snoring. 💤`);

                waterGarden("Alex", (didFail, name) => {
                    if (didFail) return console.log(`The chore day was cut short because ${name} is snoring. 💤`);
                    
                    console.log("Success! Alex finished all chores without falling asleep! 🎉");
                });
            });
        });
    });
});