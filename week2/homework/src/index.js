
const fs = require('fs')

let toDoList = (fs.readFileSync('list.txt', 'utf8')).split('\n');
let choice = process.argv[2];
let details = process.argv[3];

// help or default (no parameter) function : outputs help section that lists all commands and what they do

function displayHelp() {
  fs.readFile('helpFile.txt', 'utf8', function(err, data) {
    if (err) {
      throw error;
    } else {
      console.log(data);
    }
  });
}

// list: shows current to-dos or logical text if none have been created

function displayList() {
  console.log(toDoList)
}

// add: adds a to-do item to the list; all words are entered as one item (parameter [3])

function addToList(list, details) {
  list.push(`${details}`);
  fs.writeFile('list.txt', list, function (err) {
    if (err) throw error;
    console.log('Success!')
  });  
  console.log(list);
  // console.log(`Your new to-do list is: ${list}`);
  return list;
}

// remove: remove item at index given as parameter [3], natural counting (not starting at 0)



// reset: removes all items from the to-do list

function main() {  
    
  if (choice === 'help') {
    displayHelp();
  } else if (choice === 'list') {
    displayList();
  } else if (choice === 'add') {
    addToList(toDoList, details);
  }
}

main();
