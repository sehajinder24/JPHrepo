let input = document.querySelector("#todoinput");
let btn = document.querySelector("button)
let list=document.querySelector("#ol1")

let input = document.querySelector("#jobName");
let jobList = document.querySelector("#jobList");
let jobCount = document.querySelector("#jobCount");


btn.addEventListener("click",todo)

function todo(){

	let todoinput.input.value;
	if(todoinput==""){
		alert("Please enter a job name")
		return;
	}
	let li=document.createElement("li")
	list.appendChild(li);
	li.innerHTML=todoinput;
	input.value=""
	li.addEventListner("click",function()){
		li.remove();
	})
}