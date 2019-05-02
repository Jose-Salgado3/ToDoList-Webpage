/**
 * Represents a single task in a ToDo list
 */
class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
    //subTasks:Array<ToDoItem>;
}

/* test code to check syntax
let testItem = new ToDoItem();
testItem.title = "Teach CPW 203";
testItem.startDate = new Date("April 30, 2019");

testItem.description = "Lecture advanced JavaScript like a boss!";
testItem.isComplete = true;
if(testItem.isComplete){
}
*/
