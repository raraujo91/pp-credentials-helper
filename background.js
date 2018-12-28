chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript(null, {file: "content.js"});

});

chrome.contextMenus.create({
	title: "Credenciais PayPal",
	id: "menu", 
	contexts: ["page"]
});

chrome.contextMenus.create({
	title: "Usuário da API",
	id: "user",
	parentId: "menu",
	contexts: ["page"]
});

chrome.contextMenus.create({
	title: "Senha da API",
	id: "pwd",
	parentId: "menu",
	contexts: ["page"]
});

chrome.contextMenus.create({
	title: "Assinatura da API",
	id: "sign",
	parentId: "menu",
	contexts: ["page"]
});

chrome.contextMenus.create({
	title: "Limpar dados",
	id: "clean",
	contexts: ["browser_action"],
	onclick: cleanData
});

function cleanData() {
	chrome.storage.local.remove(['user', 'pwd', 'sign'], () => {
 		var error = chrome.runtime.lastError;
    	if (error) {
        	console.error(error);
    	}  	

	});
}
