# VS Code Jira Branch Switcher
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray)](https://github.com/xojs/xo)
[![Snyk Security](../../actions/workflows/snyk-security.yml/badge.svg)](../../actions/workflows/snyk-security.yml)
[![CodeQL](../../actions/workflows/codeql.yml/badge.svg)](../../actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/tomerh2001/vscode-jira-branches/badge)](https://securityscorecards.dev/viewer/?uri=github.com/tomerh2001/vscode-jira-branches)

VS Code Jira Branch Switcher is an extension that integrates your Jira workflow with Git branch management in VS Code.

With this extension, you can select a Jira issue from a list, and the extension will automatically switch to a corresponding Git branch or create one if it doesn't exist.
This abstraction allows you to focus on your tasks without worrying about branch naming conventions and manual branch switching.

## Features

- **Quick Jira Issue Selection:**  
  Use the Command Palette or click the status bar item to open a Quick Pick dialog with available Jira issues.

- **Seamless Git Integration:**  
  Automatically checks out an existing branch or creates a new branch based on the selected Jira issue.

- **Status Bar Display:**  
  The current Jira issue (extracted from the branch name) is displayed in the status bar for quick reference.

- **Extensible:**  
  Easily integrate with your Jira API to fetch real-time issues and customize branch naming conventions.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/vscode-jira-branch-switcher.git
   cd vscode-jira-branch-switcher
