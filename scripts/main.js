var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addBtn = document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
    var readItemBtn = document.querySelector("#read-item > button");
    readItemBtn.onclick = readItem;
};
var itemKey = "todo";
function readItem() {
    var item = JSON.parse(localStorage.getItem(itemKey));
    alert(item.title);
    alert(item.description);
}
function processNewItem() {
    var item = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}
function clearForm() {
    var textElements = document.querySelectorAll("input[type=text], textarea");
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].value = "";
    }
    var iscompleteBox = document.querySelector("#is-complete");
    iscompleteBox.checked = false;
    var urgencyList = document.querySelector("#urgency");
    urgencyList.selectedIndex = 0;
}
function notifyUser() {
    alert("your item was saved");
}
function saveItem(item) {
    var data = JSON.stringify(item);
    console.log("converting ToDo item into JSON string..");
    console.log(data);
    if (typeof (Storage) != "undefined") {
        localStorage.setItem(itemKey, data);
    }
}
function getItemFromForm() {
    var item = new ToDoItem();
    item.title = document.getElementById("title").value;
    item.description =
        document.getElementById("description").value;
    var itemStartDate = document.getElementById("start-date").value;
    item.startDate = new Date(itemStartDate);
    var itemEndDate = document.getElementById("end-date").value;
    item.endDate = new Date(itemEndDate);
    item.isComplete =
        document.getElementById("is-complete").checked;
    var urgencyElem = document.getElementById("urgency");
    item.urgency = urgencyElem.options[urgencyElem.selectedIndex].text;
    return item;
}
