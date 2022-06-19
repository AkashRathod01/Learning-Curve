document.querySelector('.Exit').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarMove');
});

document.querySelector('.navcon').addEventListener("click", ()=>{
    document.querySelector('.nav').classList.toggle('navMove');
});

function search_content(){
	let input = document.getElementById('search').value;
	input=input.toLowerCase();

	if (input == "programming") {
		document.querySelector('#proglan').scrollIntoView();
		console.log(input);
	}
	if (input == "c") {
		document.querySelector('#clang').scrollIntoView();
		console.log(input);
	}
	if (input == "c++") {
		document.querySelector('#cpplang').scrollIntoView();
		console.log(input);
	}
	if (input == "python") {
		document.querySelector('#pythonlang').scrollIntoView();
		console.log(input);
	}
	if (input == "java") {
		document.querySelector('#javalang').scrollIntoView();
		console.log(input);
	}
	if (input == "web development") {
		document.querySelector('#webdev').scrollIntoView();
		console.log(input);
	}
	if (input == "frontend") {
		document.querySelector('#frontenddev').scrollIntoView();
		console.log(input);
	}
	if (input == "html") {
		document.querySelector('#html').scrollIntoView();
		console.log(input);
	}
	if (input == "css") {
		document.querySelector('#css').scrollIntoView();
		console.log(input);
	}
	if (input == "javascript") {
		document.querySelector('#javascript').scrollIntoView();
		console.log(input);
	}
	if (input == "framework") {
		document.querySelector('#framework').scrollIntoView();
		console.log(input);
	}
	if (input == "react") {
		document.querySelector('#reactjs').scrollIntoView();
		console.log(input);
	}
	if (input == "backend") {
		document.querySelector('#backenddev').scrollIntoView();
		console.log(input);
	}
	if (input == "node") {
		document.querySelector('#nodejs').scrollIntoView();
		console.log(input);
	}
	if (input == "database") {
		document.querySelector('#database').scrollIntoView();
		console.log(input);
	}
	if (input == "mongo") {
		document.querySelector('#mongodb').scrollIntoView();
		console.log(input);
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