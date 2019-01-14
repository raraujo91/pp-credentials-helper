function onClickHandler(info, tab) {
	switch(info.menuItemId){
		case 'user':
		chrome.storage.local.get(['user'], function(result) {
			sendText(result.user);
		});
		break;

		case 'pwd':
		chrome.storage.local.get(['pwd'], function(result) {
			sendText(result.pwd);
		});
		break;

		case 'sign':
		chrome.storage.local.get(['sign'], function(result) {
			sendText(result.sign);
		});
		break;
	}
}

function sendText(cred){
	chrome.tabs.executeScript({
		code: 'var temp = document.activeElement.innerHTML; document.activeElement.innerHTML=temp + "' + cred + '";'
	});
}

function cleanData() {
	chrome.storage.local.remove(['user', 'pwd', 'sign'], () => {
 		var error = chrome.runtime.lastError;
    	if (error) {
        	console.error(error);
    	}  	
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "content.js"});
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.contextMenus.create({
	title: "Credenciais PayPal",
	id: "menu", 
	contexts: ["editable"]
});

chrome.contextMenus.create({
	title: "Usuário da API",
	id: "user",
	parentId: "menu",
	contexts: ["editable"]
});

chrome.contextMenus.create({
	title: "Senha da API",
	id: "pwd",
	parentId: "menu",
	contexts: ["editable"]
});

chrome.contextMenus.create({
	title: "Assinatura da API",
	id: "sign",
	parentId: "menu",
	contexts: ["editable"]
});

chrome.contextMenus.create({
	title: "Limpar dados",
	id: "clean",
	contexts: ["browser_action"],
	onclick: cleanData
});