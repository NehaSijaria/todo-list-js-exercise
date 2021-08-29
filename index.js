//To make it oop based, remove arrays and use an object to keep track of the state:
function newTask(title, description) {

  const task = {
    title: title,
    description: description,
    complete: false,
    // prints out the provided task's details
    logState: function() {
    console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
  },
// marks the provided task as completed
  markCompleted: function() {
  task.complete = true;
  }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
