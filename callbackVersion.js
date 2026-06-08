function mowYard(personName, callback) {
    console.log(`${personName} is starting to mow the yard...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.00) {
            console.log(`${personName.toUpperCase()} accidentally mowed over the garden gnome!\n`);
        } else {
            console.log(`${personName.toUpperCase()} mowed the yard.\n`);
        }

        callback();
    }, 2000);
}


function weedEatYard(personName, callback) {
    console.log(`${personName} is starting to weedeat the yard...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.10) {
            console.log(`${personName.toUpperCase()} fell asleep holding the weed eater!\n`);
        } else {
            console.log(`${personName.toUpperCase()} weedeated the yard.\n`);
        }

        callback();
    }, 1500);
}


function trimHedges(personName, callback) {
    console.log(`${personName} is starting to trim the hedges...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.20) {
            console.log(`${personName.toUpperCase()} fell asleep while trimming the hedges!\n`);
        } else {
            console.log(`${personName.toUpperCase()} trimmed the hedges.\n`);
        }

        callback();
    }, 1000);
}



function collectWood(personName, callback) {
    console.log(`${personName} is going to collect wood...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.15) {
            console.log(`${personName.toUpperCase()} fell asleep while collecting wood!\n`);
        } else {
            console.log(`${personName.toUpperCase()} collected the wood.\n`);
        }

        callback();
    }, 1800);
}



function waterGarden(personName, callback) {
    console.log(`${personName} is starting to water the garden...`);

    setTimeout(() => {
        const chance = Math.random();

        if (chance < 0.50) {
            console.log(`Oh no! ${personName.toUpperCase()} fell fast asleep with the hose running!\n`);
        } else {
            console.log(`${personName.toUpperCase()} watered the garden.\n`);
        }

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
