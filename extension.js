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
		vscode.window.showInformationMessage(`Click 'open' to learn more about what you selected`);
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		var segment = vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection)
		console.log(segment)
		

		
		switch(segment){
			case "def":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_functions.asp'));
				break;
			case "class":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_classes.asp'));
				break;
			case "return":
				vscode.env.openExternal(vscode.Uri.parse('https://www.geeksforgeeks.org/python-return-statement/'));
				break;
			case "self":
				vscode.env.openExternal(vscode.Uri.parse('https://www.geeksforgeeks.org/self-in-python-class/'));
				break;
			case "assert":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/ref_keyword_assert.asp'));
				break;
			case "if":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_conditions.asp'));
				break;
			case "for":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_for_loops.asp'));
				break;
			case "while":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_while_loops.asp'));
				break;
			case "lambda":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_functions.asp'));
				break;
			case "try":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_try_except.asp'));
				break;
			case "except":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_try_except.asp'));
				break;
			case "break":
				vscode.env.openExternal(vscode.Uri.parse('https://www.tutorialspoint.com/python/python_break_statement.htm'));
				break;
			case "global":
				vscode.env.openExternal(vscode.Uri.parse('https://www.geeksforgeeks.org/global-keyword-in-python/'));
				break;
			case "None":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/ref_keyword_none.asp'));
				break;
			case "del":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/ref_keyword_del.asp'));
				break;
			case "elif":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_conditions.asp'));
				break;
			case "else":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_conditions.asp'));
				break;
			case "import":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_modules.asp'));
				break;
			case "from":
				vscode.env.openExternal(vscode.Uri.parse('https://www.w3schools.com/python/python_modules.asp'));
				break;
			case "len":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#len'));
				break;
			case "print":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#print'));
				break;
			case "abs":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#abs'));
				break;
			case "round":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#round'));
				break;
			case "min":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#min'));
				break;
			case "max":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#max'));
				break;
			case "sum":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#sum'));
				break;
			case "sorted":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#sorted'));
				break;
			case "type":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#type'));
				break;
			case "all":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#all'));
				break;
			case "any":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#any'));
				break;
			case "bin":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#bin'));
				break;
			case "bool":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#bool'));
				break;
			case "map":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#map'));
				break;
			case "zip":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#zip'));
				break;
			case "set":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#set'));
				break;
			case "range":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#range'));
				break;
			case "open":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#open'));
				break;
			case "hash":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#hash'));
				break;
			case "help":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#help'));
				break;
			case "filter":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#filter'));
				break;
			case "reversed":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#reversed'));
				break;
			case "enumerate":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#enumerate'));
				break;
			case "dict":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#dict'));
				break;
			case "slice":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#slice'));
				break;
			case "input":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#input'));
				break;
			case "ord":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#ord'));
				break;
			case "format":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#format'));
				break;
			case "eval":
				vscode.env.openExternal(vscode.Uri.parse('https://docs.python.org/3/library/functions.html#eval'));
				break;
			default: 
				vscode.window.showInformationMessage(`Sorry, I could not find any information on: ${segment}`);	
		};

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
