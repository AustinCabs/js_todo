
const account = (user,pass) => {

	if (user == "admin" && pass == "admin" ) {
		console.log("Successfully Login");	
	}
	else if (user.length > 5)
	{
		console.log("username length is invalid");
	}
	else if (pass.length > 5)
	{
		console.log("password length is invalid");
	}
	else if (user != "admin")
	{
		console.log("username incorrect");
	}
	else if (pass != "admin")
	{
		console.log("password incorrect");
	}

}


function insertNumber(insert) {
	let name = [];
	name.forEach(element => {
		
	});

}

const greet = greetings => "hELLOW HANDSOME";

 const payroll = (days , salary) => 
 {
	// let total = 0;
     return days * salary;	 
 }

 const list = document.querySelector('.family');
 const family = ['Austin','aaron','cedric'];
 let html = '';
	family.forEach(function(person) {
		html += `<li>${person}</li>`;
	});

	console.log(html);
	list.innerHTML = html;
	