'use strict';

/**
 * Simple Server
 * @module input
 */

const minimist = require('minimist');

/**
 * sample of input
 * node notes.js --add 'here is our note'
 */

class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    this.getAction(argv);

  }
  getAction(argv) {
    var getAction = Object.keys(argv)[1];
    let category = Object.keys(argv)[2];

    if((getAction === 'add' || getAction ==='a' ) && !(Object.keys(argv).length > 3) && category === 'category'){

      if((typeof (argv[getAction])=== 'string' || typeof (argv[getAction])=== 'number') && typeof(argv[category]) ==='string'){
        this.action = getAction;
        this.payload = argv[getAction];
        this.category=argv[category];
      }else{
        errorHandlerNote();
      }
    }else if( getAction === 'list' && !(Object.keys(argv).length > 2)){
      this.action = getAction;
      this.payload = argv[getAction];
    } else if( getAction === 'delete' && !(Object.keys(argv).length > 2)){
      if(typeof (argv[getAction])=== 'string'){
        this.action = getAction;
        this.payload = argv[getAction];
      }else{
        console.log('you should type the ID');
      }
    }
    else{
      errorHandlerAction();
    }
    
  }
  valid() {
    return (this.action && this.payload);
  }
}
function errorHandlerNote() {
  console.log('invaled note');
}
function errorHandlerAction() {
  console.log(`* you should use (--add with a note and --category for the category) or (--a/-a)
* you should use --list to show all the notes or you can do -- list with a category 
* you should use --delete with an id to delete a note`);
}
module.exports = Input;

// * you should use (--add with a note and --category for the category) or (--a/-a)
// * you should use --list to show all the notes or you can do -- list with a category 
// * you should use --delete with an id to delete a note