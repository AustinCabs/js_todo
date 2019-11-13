

document.getElementById("myButton").addEventListener("click",add);

function add() {
  
 let txt = document.getElementById("myTextBox");
 if (txt.value.length != 0) {
   let todoTable = document.getElementById("myTable").insertRow(-1);
   let coulmnOne = todoTable.insertCell(0);
   let coulmnTwo = todoTable.insertCell(1);
   coulmnOne.innerHTML=txt.value;
   coulmnTwo.innerHTML= `<button class="btn btn-sm btn-danger" onclick="remove(this)">Finished</button>`;
   txt.value= "";
 }
 else
 {
   alert("Please Put Your Todo List");
 }
}

document.addEventListener("keypress",function () {
  if (event.keyCode == 13) {
      add();
  }
})

function remove(element) {
    let index =element.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(index);
}

function update() {
  // wala pa
}


