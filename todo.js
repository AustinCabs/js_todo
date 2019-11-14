
//Event Listener
document.getElementById("myButton").addEventListener("click",add);

document.addEventListener("keypress",function () {
  if (event.keyCode == 13) {
      add();
  }
});

//functions old way to declare
function add() {
  
 let txt = document.getElementById("myTextBox");
 if (txt.value.length != 0) {
   let todoTable = document.getElementById("myTable").insertRow(-1);
   let coulmnOne = todoTable.insertCell(0);
   let coulmnTwo = todoTable.insertCell(1);
   coulmnOne.innerHTML=txt.value;
   coulmnTwo.innerHTML= `<button class="btn btn-sm btn-danger" onclick="remove(this)">Finished</button>`;
   coulmnTwo.innerHTML += `<button id="update"  class="btn btn-sm btn-success" onclick="update(this)">Change</button>`;
   txt.value= "";
 }
 else
 {
   alert("Please Put Your Todo List");
 }

}


function remove(data) {
  let confirmation = confirm("Wow! Congrats! you Finished your Todo will \nWill Remove it  so you can add a new one");
  if (confirmation == true)
  {

  }
    let index =data.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(index);
}

function update(data) {
  $('#exampleModal').modal('toggle');
  let listData = document.getElementById("modalTextBox");
  let todoTable = document.getElementById("myTable");
  let index = data.parentNode.parentNode.rowIndex;
  listData.value = todoTable.rows[index].cells[0].innerText;

  document.getElementById("modalSave").addEventListener("click",function() {
      /* alert(document.getElementById("modalTextBox").value) */
      todoTable.rows[index].cells[0].innerText = document.getElementById("modalTextBox").value; 
      alert("Successfully Updated");
      $('#exampleModal').modal('toggle');
  });
}