/* eslint-disable @typescript-eslint/no-empty-function */

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "jira-branches" is now active!');

	const disposable = vscode.commands.registerCommand('jira-branches.helloWorld', async () => {
		const result = await vscode.window.showQuickPick(['one', 'two', 'three'], {title: 'Pick one'});
		console.log(result);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
