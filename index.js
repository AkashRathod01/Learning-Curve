document.querySelector('.Exit').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarMove');
});

document.querySelector('.navcon').addEventListener("click", ()=>{
    document.querySelector('.nav').classList.toggle('navMove');
});

// JavaScript code
function search_content() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


// let count = 0;

// setInterval(() => {
//     count+=1;
//     if ((count%2)==0) {
//         document.querySelector('.sitename').style.fontWeight = 'bold';
//     }
//     else{
//         document.querySelector('.sitename').style.fontWeight = 'lighter';
//     }
// }, 1000);