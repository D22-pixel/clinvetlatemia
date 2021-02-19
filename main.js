var link = document.getElementById("linkbanhoetosa");
link.onclick = showMessage;

var formNews = document.getElementById("formNovidades");
formNews.onsubmit = validateNewsletter;

var txtNomeNews = document.getElementById("inputNome");
var txtEmailNews = document.getElementById("inputEmail");
txtNomeNews.onchange = clearAlert;
txtEmailNews.onchange = clearAlert;

function showMessage(){
	alert("Site em construção...");
}
function validateNewsletter(){
	var txtNome = document.getElementById("inputNome");
	var txtEmail = document.getElementById("inputEmail");
	
	if(txtNome.value == "" || txtEmail.value == ""){
		var div = document.getElementById("formNovidadesAlert");
		div.style.display = "block";
		
		return false;
	}
	
	return true;
}
	
function clearAlert(){
	var div = document.getElementById("formNovidadesAlert");
	div.style.display = "none";
}