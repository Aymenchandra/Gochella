function upperCase() {
  var maj = document.getElementById("search");
  maj.value = maj.value.toUpperCase();
}
function changebg(input){
	input.style.backgroundColor='#d2e1ff';
}
function removebg(input){
	input.style.backgroundColor='';
}
 function showresult() {
    var inputElement = document.getElementById('search');
    var inputValue = inputElement.value;
    alert('Le texte de l\'input est : '+inputValue);
}
function ask(){	
	var userName = window.prompt("Veuillez saisir votre nom :");
	if (userName) {
		alert("Bienvenue,"+userName+"!");
		 var userImage = document.getElementById('userimg');
		userImage.title = userName;
	} else {
		alert("Nom non saisi. Bienvenue anonyme !");
	}	
}

   
    