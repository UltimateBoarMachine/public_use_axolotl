'use strict';

// import fs from 'fs';
// let { fs } = await import('fs')
const prompt = require('prompt-sync')({sigint: true});
// const fs = require('fs')();
this.plaything = {};

class Axolotl {
    constructor(owner, label) {
        this.label = label.toLowerCase();
        this.owner = owner.toLowerCase();
        this.handprints = 0;
        this.libido = 0
        this.caged = false;
        this.chastity = false;
    }
    spank()  { this.libido++; if (this.caged == true) { return "You can't smack around the axolotl while it's in the cage" } else {this.handprints++; return "eep!"}}
    gratitude() { this.libido++; return (this.owner == null ? "thank you, owner!": "thank you, " + this.owner + "!") }
    observe() {
        let response = "This axolotl has been named '" + this.label +"'.\nThis axolotl has " + this.handprints + " handprints on its butt.\n"
        response = response + (this.caged == true ? "This axolotl is happily in its cage.\n" : "This axolotl is out of its cage.\n")
        response = response + (this.chastity == true ? "This axolotl's crotch is locked away." : "This axolotl's crotch is exposed for all to see.")
        return response
    }
    cage() {
        if (this.caged == false) { this.caged = true; return "You've shut up the axolotl in its cage. It chirps happily at you."}
        else { this.caged = false; return "You've let the axolotl out for another round of being your precious little plaything."}
 }
    chastise() {
        if (this.chastity == false) { this.chastity = true; return "You lock up the axolotl in its chastity cage, thereby chastising it. You're certain that's how that word works."}
        else { this.chastity = false; return "You've released the axolotl from its chastity cage. It's now exposed for your viewing pleasure."}
    }
    tease() {
        let response = "You pet the axolotl while also carefully explaining how it's not a person. It shudders in ecstasy.\n"
        if (this.libido > 10) {
          response = response + (this.chastity == true ? "Overcome by this blatant objectification and domination, it cums into its chastity cage.\n" : "Overcome by this utter display of its inferiority, it cums onto the floor.\n")
          response = response + "As it did so without your permission, you bend it over your knee, smack it five times on the ass, and then make it clean up its own mess."
          this.handprints+= 5;
          this.libido = 0;
        }
        else {
            response = "You pet the axolotl while also carefully explaining how it's not a person. It shudders in ecstasy."
        }
        return response;
    }
};

start()

function start () {
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log("Hello! Welcome to the axolotl game!")
let validStart = false;
globalThis.initial = true;
// while (validStart == false) {
// readline.question('Would you like to load an axolotl or create a new one? Please reply with "load" or "new".', resp => {
//     switch (resp) {
//         case "load":
//             validStart = true;
//             loadAxolotl();
//         case "new":
//             validStart = true;
//             newAxolotl();
//         default:
//             "Sorry! You didn't input a a valid command."
//     }

const resp = prompt('Would you like to load an axolotl or create a new one? Please reply with "load" or "new": ')
    switch (resp) {
        case "load":
            console.log("Sorry, loading is currently disabled.")
            // validStart = true;
            // loadAxolotl();
            // main()
            start()
            break;
        case "new":
            validStart = true;
            newAxolotl();
            main()
            break;
        default:
            "Sorry! You didn't input a a valid command."
            start()
            break;
    }

}


function main() {
    var quit = false;
    // while (quit == false) {
        // readline.question('You are now free to play with your axolotl. Please type in a valid command. For a list of commands, type in "help"', command => {
            if (globalThis.initial == true) {console.log('You are now free to play with your axolotl. Please type in a valid command. For a list of commands, type in "help". To quit, hit CTRL+C.')}
            globalThis.initial = false;
            let command = prompt('Command: ')
            switch (command) {
                case "help":
                    console.log("spank\ncage\nbask\nobserve\nsave\nchastise\ntease\nquit")
                    main()
                    break;
                case "spank":
                    console.log(globalThis.plaything.spank());
                    console.log(globalThis.plaything.gratitude());
                    main()
                    break;
                case "cage":
                    console.log(globalThis.plaything.cage());
                    main()
                    break;
                case "bask":
                    console.log("You bask in the adoration of your plaything. It kneels down as it says:")
                    console.log(globalThis.plaything.gratitude());
                    main()
                    break;
                case "observe":
                    console.log(globalThis.plaything.observe());
                    main()
                    break;
                case "chastise":
                    console.log(globalThis.plaything.chastise());
                    main()
                    break;
                case "tease":
                    console.log(globalThis.plaything.tease());
                    main()
                    break;
                case "save":
                    console.log("Sorry, saving is currently disabled")
                    // saveAxolotl()
                    main()
                    break;
                case "save":
                    quit = true;
                    console.log("Yeah, quit's not quite working correctly? Sorry. Just hit Ctrl+C.")
                    break;
                default:
                    "Sorry! You didn't input a a valid command."
                    main()
            }
          ;
    // }
}








function newAxolotl() {
    let n;
    let t;
    // readline.question('Please type in the name of your axolotl', name => {
    //     n = name;
    //     readline.close();
    //   });
    // readline.question('Now type in how you prefer to be addressed', title => {
    //     t = title;
    //     readline.close();
    //   });
    n = prompt('Please type in the name of your axolotl: ')
    t = prompt('Now type in how you prefer to be addressed: ')
      globalThis.plaything = new Axolotl(t, n);
      console.log("Congratulations! You now have a brand new axolotl to torment to your heart's content!")
}

function saveAxolotl() {
    let data = JSON.stringify(globalThis.plaything, null, 2);

fs.writeFile('axolotl.json', data, (err) => {
    if (err) throw err;
    console.log('Axolotl compressed into pure data, to be enjoyed at a later date.');
    console.log('Any other axolotl you had saved has been discarded like the trash it is.')
});
}


function loadAxolotl() {
    fs.readFile('axolotl.json', (err, data) => {
        if (err) throw err;
        let ax = JSON.parse(data);
        globalThis.plaything = new Axolotl() ("t","n");
        Object.assign(globalThis.plaything, ax)
        console.log('Axolotl regenerated for your enjoyment.');
        globalThis.plaything.observe();
    });
}