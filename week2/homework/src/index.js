
const fs = require('fs');

const toDoList = (fs.readFileSync('list.txt', 'utf8')).split('\n');
const choice = process.argv[2];
const details = process.argv[3];

function displayHelp() {
  fs.readFile('helpFile.txt', 'utf8', function (err, data) {
    if (err) {
      console.log('Something went wrong');
    } else {
      console.log(data);
    }
  });
}

function displayList() {
  const stats = fs.statSync('list.txt');
  const fileSizeInBytes = stats.size;
  if (fileSizeInBytes === 0) {
    console.log('Your to-do list is empty!');
  } else {
    console.log(toDoList[0].split(','));
  }
}

function addToList(list, newDetails) {
  const stats = fs.statSync('list.txt');
  const fileSizeInBytes = stats.size;
  if (fileSizeInBytes === 0) {
    fs.writeFile('list.txt', newDetails, function (err) {
      if (err) throw error;
      console.log('Success!');
    });
  } else {
    list.push(`${newDetails}`);
    fs.writeFile('list.txt', list, function (err) {
      if (err) throw error;
      console.log('Success!');
    });
  }
}

function removeFromList(list, details) {
  const stats = fs.statSync('list.txt');
  const fileSizeInBytes = stats.size;
  if (fileSizeInBytes === 0) {
    console.log('You cannot remove an item from an empty list');
  } else {
    list = list[0].split(',');
    list.splice((details - 1), 1);
    fs.writeFile('list.txt', list, function (err) {
      if (err) throw error;
      console.log('Success!');
    });
  }
}

function resetList() {
  fs.writeFile('list.txt', '', function (err) {
    if (err) throw error;
    console.log('Success!');
  });
}

function main() {
  if (choice === 'help' || choice === undefined) {
    displayHelp();
  } else if (choice === 'list') {
    displayList();
  } else if (choice === 'add') {
    addToList(toDoList, details);
  } else if (choice === 'reset') {
    resetList();
  } else if (choice === 'remove') {
    removeFromList(toDoList, details);
  }
}

main();
