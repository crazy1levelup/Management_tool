var onNewForm = document.getElementById('onNewForm');
var newForm = document.getElementById('newForm');
var rIndex,
    table = document.getElementById("showElements");
var userArr= [];
var projArr=[];
var taskArr=[];

function show() {
  newForm.style.visibility = "visible";
}

function hide() {
  newForm.style.visibility = "hidden";
}

function toggle() {
  if(newForm.style.visibility === "hidden") {
    show();
  } else {
    hide();
  }
}

hide();
onNewForm.addEventListener("click", toggle, false);

function EmptyInput() {
  var isEmpty = false,
  name = document.getElementById("name").value,
  type = document.getElementById("type").value,
  issueName = document.getElementById("issueName").value,
  sprint = document.getElementById("sprint").value,
  assignee = document.getElementById("assignee").value,
  description = document.getElementById("description").value,
  comments = document.getElementById("comments").value;

  if(name ==="" || type ==="" || issueName ==="" || sprint ==="" || assignee ==="" || description ==="" || comments ==="") {
    alert("All fields must be added");
    isEmpty = true;
  }
}

  function EmptyInputUser() {
    var isEmpty = false,
    name = document.getElementById("name").value,
    type = document.getElementById("type").value,
    issueName = document.getElementById("issueName").value,
    sprint = document.getElementById("sprint").value,
    assignee = document.getElementById("assignee").value,
    description = document.getElementById("description").value,
    comments = document.getElementById("comments").value;

    if(type ==="" || issueName ==="" || sprint ==="" || assignee ==="" || description ==="" || comments ==="") {
      alert("All fields must be added");
      isEmpty = true;
    }

  return isEmpty;
}

 function addRow() {
   if(!EmptyInput()){
     var newRow = table.insertRow(table.length),
       cell1 = newRow.insertCell(0),
       cell2 = newRow.insertCell(1),
       cell3 = newRow.insertCell(2),
       cell4 = newRow.insertCell(3),
       cell5 = newRow.insertCell(4),
       cell6 = newRow.insertCell(5),
       cell7 = newRow.insertCell(6),
       cell8 = newRow.insertCell(7),
       cell9 = newRow.insertCell(8);
       cell10 = newRow.insertCell(9);
       cell11 = newRow.insertCell(10);
       cell12 = newRow.insertCell(11);

       name = document.getElementById("name").value,
       project = document.getElementById("project").value,
       idProject = Math.floor(Math.random()*2000) +1,
       id = table.rows.length -1,
       type = document.getElementById("type").value,
       issueName = document.getElementById("issueName").value,
       sprint = document.getElementById("sprint").value,
       createdBy = Math.floor(Math.random()*1000) +1,
       assignee = document.getElementById("assignee").value,
       description = document.getElementById("description").value,
       tasks = this.taskArr;
       comments = document.getElementById("comments").value,
       createdAt = getTodayDate();

       var userObj = {};
       userObj.name = name;
       userObj.id= createdBy;
       this.userArr.push(userObj);
       console.log(userArr);

       for(var i = 0; i< userArr.length; i++) {
         if(userArr[i].name === name.toString()){
           createdBy = userArr[i].id;
           break;
         }
       }


       var projObj={};
       projObj.project = project;
       projObj.idProject = idProject;
       this.projArr.push(projObj);
       console.log(projArr);

       cell1.innerHTML = id;
       cell2.innerHTML = type;
       cell3.innerHTML = issueName;
       cell4.innerHTML = sprint;
       cell5.innerHTML = createdBy;
       cell6.innerHTML = assignee;
       cell7.innerHTML = description;
       cell8.innerHTML = tasks;
       cell9.innerHTML = comments;
       cell11.innerHTML = createdAt;
       cell12.innerHTML = "New"

       this.taskArr = [];
       updateRow();
       resetForm();

   }
}

function updateRow() {
  for(var i = 1; i< table.rows.length; i++) {
    table.rows[i].onclick = function() {
      rIndex = this.rowIndex;
      document.getElementById("type").value = this.cells[1].innerHTML;
      document.getElementById("issueName").value = this.cells[2].innerHTML;
      document.getElementById("sprint").value = this.cells[3].innerHTML;
      document.getElementById("assignee").value = this.cells[5].innerHTML;
      document.getElementById("description").value = this.cells[6].innerHTML;
      document.getElementById("tasks").value = this.cells[7].innerHTML;
      document.getElementById("comments").value = this.cells[8].innerHTML;
    }
  }
}

/*function addTasks() {
  var taskList =document.getElementById("myUl") rIndex,cIndex;
    for(var i =1; i < table.rows.length; i++){
      table.rows[i].cells[7].onclick = function() {
        rIndex = this.parentElement.rowIndex;
        cIndex = this.cellIndex;
        console.log(rIndex + " " + cIndex);
      }
    }
}*/

function addTask(){
  var task;
  task = document.getElementById("tasks").value;
  this.taskArr.push(task);
  console.log(taskArr);
  document.getElementById("tasks").value="";
}

function searchStatus() {
  var input, filter, tr, td, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  tr = table.getElementsByTagName("tr");

  for(i=0; i< tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[11];
    if(td) {
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display ="";
      }else {
        tr[i].style.display = "none";
      }
    }
  }
}

updateRow();

function editRow() {
  var id = table.rows.length -1
  type = document.getElementById("type").value,
  issueName = document.getElementById("issueName").value,
  sprint = document.getElementById("sprint").value,
  assignee = document.getElementById("assignee").value,
  description = document.getElementById("description").value,
  tasks = this.taskArr;
  comments = document.getElementById("comments").value,
  updatedAt = getTodayDate();
  document.getElementById("id-feedback").addEventListener("click", function(){
    table.rows[rIndex].cells[11].innerHTML = "Feedback";
  });
  document.getElementById("id-rework").addEventListener("click", function(){
    table.rows[rIndex].cells[11].innerHTML = "Rework";
  });
  document.getElementById("id-resolved").addEventListener("click", function(){
    table.rows[rIndex].cells[11].innerHTML = "Resolved";
  });
  document.getElementById("id-ready").addEventListener("click", function(){
    table.rows[rIndex].cells[11].innerHTML = "Ready for testing";
  });

  if(!EmptyInputUser()){
    table.rows[rIndex].cells[0].innerHTML = id;
    table.rows[rIndex].cells[1].innerHTML = type;
    table.rows[rIndex].cells[2].innerHTML = issueName;
    table.rows[rIndex].cells[3].innerHTML = sprint;
    table.rows[rIndex].cells[5].innerHTML = assignee;
    table.rows[rIndex].cells[6].innerHTML = description;
    table.rows[rIndex].cells[7].innerHTML = tasks;
    table.rows[rIndex].cells[8].innerHTML = comments;
    table.rows[rIndex].cells[9].innerHTML = updatedAt;
    table.rows[rIndex].cells[11].innerHTML = "In progress";

    this.taskArr = [];
    resetForm();
  }
}

function removeRow() {
  table.deleteRow(rIndex)
  resetForm();
}

function resetForm() {
  document.getElementById("name").value = ""
  document.getElementById("project").value =""
  document.getElementById("type").value = ""
  document.getElementById("issueName").value = ""
  document.getElementById("sprint").value = ""
  document.getElementById("assignee").value = ""
  document.getElementById("description").value = ""
  document.getElementById("tasks").value = ""
  document.getElementById("comments").value = ""
}

function getTodayDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if(dd < 10) {
    dd = '0' + dd;
  }
  if(mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '/' +mm + '/' + yyyy;
  return today;
}
