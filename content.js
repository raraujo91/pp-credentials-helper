var user = document.querySelector('#usernameDisplay').innerHTML.trim();
var pwd = document.querySelector('#passwordDisplay').innerHTML.trim();
var sign = document.querySelector('#signatureDisplay').innerHTML.trim();

alert("Usuário: " + user + '\n' + "Senha: " + pwd + '\n' + "Assinatura: " + sign);

chrome.storage.local.set({ user: user, pwd: pwd, sign: sign }, () => {
	alert("Dados salvos!");
});

chrome.storage.local.get(['user', 'pwd', 'sign'], function(result) {
	console.log("Usuário: " + result.user);
	console.log("Senha: " + result.pwd);
	console.log("Assinatura: " + result.sign);
});
