---
slug: /combination-generator/getting-started/using-an-executable
description: How use the Generator from an executable file
---

# Using an executable file

:::warning
Using the executable file is NOT RECOMENDED. Windows Defender gives false warnings for a virus (trojan). Also some browsers prevent you from dowloading it. This is because it is not signed. Signing it would cost money.
:::


## Usage

Download the latest release from the GitHub repository's "Releases" section,
or [build the application](#building) from source code.


## Building

1. Clone the repository.

```bash
git clone https://github.com/PetarMc1/combination-generator
```



2. Install PyInstaller.

If you haven't installed PyInstaller yet, you can install it via pip:

```bash
pip install pyinstaller
```




3. Run PyInstaller command.

Use PyInstaller to convert the script into a `.exe` file with the `--windowed` flag to hide the console window.

```bash
pyinstaller --onefile --windowed --icon=Assets/logo.ico --add-data "Assets/logo.ico;Assets" combination_generator.py
```
This command will create an executable file (combination_generator.exe) without a console window when opened.




4. Find the `.exe`.

Once PyInstaller has finished, navigate to the `dist` directory inside the repo directory. You will find the executable (`.exe`) file (combination_generator.exe) in this directory.

