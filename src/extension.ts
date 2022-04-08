import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('run-selected-powershell-script.runPowerShellScript', (uri, files) => {
			let fileName = '';
			let fileDirectory = '';

			if(typeof files !== 'undefined' && files.length > 0) {
				let url = vscode.workspace.asRelativePath(files[0].path);
				fileName = url.replace(/\\/g, '/').split('/').pop() ?? 'leeg';
				fileDirectory = url.replace(/\\/g, '/').replace(/\/[^\/]+$/,'');
			} else if(uri) {

			}

			let terminal = vscode.window.createTerminal();
			terminal.show();
			terminal.sendText(`cd ./${fileDirectory}`);
			terminal.sendText(`./${fileName}`);

		})
	);
}