var clientID, secretID, user, pwd, sign = null;

if(document.querySelector('#usernameDisplay') == null){

	if(document.querySelector('#credentials-live') == null) {
		clientID = document.querySelector('#credentials-sb').innerText;
		document.querySelector("#credentials-table-sb").setAttribute("style", "display: block");
	} else {
		clientID = document.querySelector('#credentials-live').innerText;
		document.querySelector("#credentials-table-live").setAttribute("style", "display: block");
	}
	
	secretID = document.querySelector('td.secret.selectable').innerText;

	// alert("Client ID: " + clientID + '\n' + "Secret ID: " + secretID);

	chrome.storage.local.set({ clientID: clientID, secretID: secretID }, () => {
		alert("Dados salvos!");
	});

} else {

	user = document.querySelector('#usernameDisplay').innerText.trim();
	pwd = document.querySelector('#passwordDisplay').innerText.trim();
	sign = document.querySelector('#signatureDisplay').innerText.trim();

	document.querySelector("#showUsername").setAttribute("class", "hide");
	document.querySelector("#showPassword").setAttribute("class", "hide");
	document.querySelector("#showSignature").setAttribute("class", "hide");

	document.querySelector("#usernameSection").setAttribute("class", "show");
	document.querySelector("#passwordSection").setAttribute("class", "show");
	document.querySelector("#signatureSection").setAttribute("class", "show");

	// alert("Usuário: " + user + '\n' + "Senha: " + pwd + '\n' + "Assinatura: " + sign);

	chrome.storage.local.set({ user: user, pwd: pwd, sign: sign }, () => {
		alert("Dados salvos!");
	});

}
