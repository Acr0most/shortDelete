'use strict';
import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

    let disposable: vscode.Disposable = vscode.commands.registerCommand('extension.shortDelete', () => {
        const activeEditorUri: vscode.Uri = vscode.window.activeTextEditor.document.uri;
        vscode.commands.executeCommand('workbench.action.closeActiveEditor');
        fs.unlink(activeEditorUri.path, (res) => { console.log('deleted', activeEditorUri.path); });
    });

    context.subscriptions.push(disposable);
}

