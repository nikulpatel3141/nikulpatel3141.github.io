---
title: "Dotfiles"
date: "2022-12-10"
description: "Configuration files for Neovim, Fish Shell, and Helix"
tags: ["Linux", "Tools"]
github: "https://github.com/nikulpatel3141/dotfiles"
featured: false
---

My configuration files for [Fish Shell](https://fishshell.com/) and [Helix](https://helix-editor.com/) are on GitHub.

## Setup

One-command setup for `apt`-based Linux distros:

```bash
git clone https://github.com/nikulpatel3141/dotfiles ~/dotfiles
cd ~/dotfiles/scripts

bash install_apt_packages.sh   # fish shell, g++, etc.
bash install_brew_packages.sh  # homebrew + packages

cd ..
stow fish/
stow helix/
```

[GNU Stow](https://www.gnu.org/software/stow/) manages symlinks so config files live in the repo but appear in the right places on the filesystem.
