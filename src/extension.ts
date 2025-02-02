/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "jira-branches" is now active!');

	const disposable = vscode.commands.registerCommand('jira-branches.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Jira Branches!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
