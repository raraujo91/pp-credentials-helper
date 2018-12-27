chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript(null, {file: "content.js"});

});

chrome.contextMenus.create({
	title: "Credenciais PayPal",
	id: "menu", 
	contexts: ["all"]
});

chrome.contextMenus.create({
	title: "Usuário da API",
	id: "user",
	parentId: "menu",
	contexts: ["all"]
});

chrome.contextMenus.create({
	title: "Senha da API",
	id: "pwd",
	parentId: "menu",
	contexts: ["all"]
});

chrome.contextMenus.create({
	title: "Assinatura da API",
	id: "sign",
	parentId: "menu",
	contexts: ["all"]
});