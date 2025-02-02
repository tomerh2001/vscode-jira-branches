/* eslint-disable @typescript-eslint/no-empty-function */

import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "jira-branches" is now active!');

	vscode.register;
	const disposable = vscode.commands.registerCommand('jira-branches.setup', async () => {
		const jiraUrl = await vscode.window.showInputBox({
			placeHolder: 'Enter your Jira URL',
			prompt: 'Enter your Jira URL',
		});

		const jiraToken = await vscode.window.showInputBox({
			placeHolder: 'Enter your Jira API token',
			prompt: 'Enter your Jira API token',
		});

		await vscode.workspace.getConfiguration().update('jira-branches.jiraUrl', jiraUrl, vscode.ConfigurationTarget.Global);
		await vscode.workspace.getConfiguration().update('jira-branches.jiraToken', jiraToken, vscode.ConfigurationTarget.Global);
		await vscode.window.showInformationMessage('Jira URL and token saved successfully!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
