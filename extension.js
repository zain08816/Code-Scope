// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codescope" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	let select = vscode.commands.registerCommand('codescope.select', function () {
		vscode.window.showInformationMessage(`Running select`);
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		var word = vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection)
		console.log(word)
		vscode.window.showInformationMessage(`You selected ${word}`);
	});

	context.subscriptions.push(select);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
