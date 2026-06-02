function mowYard(personName, callback) {
    console.log(`${personName} is starting to mow the yard...`);
    setTimeout(() => {
        console.log(`${personName.toUpperCase()} mowed the yard.\n`);
        callback(); 
    }, 2000);
}

function weedEatYard(personName, callback) {
    console.log(`${personName} is starting to weedeat the yard...`);
    setTimeout(() => {
        console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
        callback(); 
    }, 1500);
}

function trimHedges(personName, callback) {
    console.log(`${personName} is started to trim the Hedges...`);
    setTimeout(() => {
        console.log(`${personName.toUpperCase()} trimed the Hedges.\n`);
        callback(); 
    }, 1000);
}


function collectWood(personName, callback) {
    console.log(`${personName} is going to collect wood...`);
    setTimeout(() => {
        console.log(`${personName.toUpperCase()} collected the wood.\n`);
        callback(); 
    }, 1800);
}


function waterGarden(personName, callback) {
    console.log(`${personName} is starting to water the garden...`);
    
    setTimeout(() => {
        console.log(`😴 Oh no! ${personName.toUpperCase()} fell fast asleep with the hose running!`);
        
        callback(); 
        
    }, 1200);
}

mowYard("Alex", () => {
    weedEatYard("Alex", () => {
        trimHedges("Alex", () => {
            collectWood("Alex", () => {
                waterGarden("Alex", () => {
                    console.log("The chore day was cut short because Alex is snoring.");
                });
            });
        });
    });
});