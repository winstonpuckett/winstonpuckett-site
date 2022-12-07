--- 
icon: 🐲
title: Lucifer
layout: layout-product.njk
productUrl: /products/lucifer
---

[Overview](/products/lucifer)
[Getting Started](/products/lucifer/docs)
[Installation](/products/lucifer/installation)
[Test Syntax](/products/lucifer/tests)

# CLI Reference

Note: the CLI is subject to change in subsequent versions. For instance, currently if you specify more than one input directory, only the last directory will be honored. In the future, this may allow you to specify many suites.

If you see any unconventional behavior, feel free to note it with the [issues tab](https://github.com/winstonpuckett/lucifer/issues) in GitHub.

## Flags

### Help

Invoke with:
```bash
lucifer -h
lucifer --help
``` 

Use case:<br>
View information about the project and how to invoke it.

Description:<br>
Displays all flags and options to invoke the cli, useful links to help you use lucifer effectively, and information about the product such as author and version.

### Version

Invoke with:
```bash
lucifer -v
lucifer --version
``` 

Use case:<br>
View the current version.

Description:<br>
Displays the current version in format: vX.X.X where X is the current version number.

### Silent

Invoke with:
```bash
lucifer -s
lucifer --silent
``` 

Use case:<br>
Suppress all console output.

Description:<br>
Tells lucifer not to send any output to the console. In the case of a crash (which should be rare. Please report if you do run into this), the silent flag may not be honored.

### No File

Invoke with:
```bash
lucifer -n
lucifer --no-file
``` 

Use case:<br>
Suppress the results.json file.

Description:<br>
Tells lucifer not to create a file with the results of the run. This can be helpful if you're running locally or have no need to output an extra file.

## Options

Option definiton

### Input Directory

Invoke with:
```bash
lucifer -i <directory_or_file>
lucifer --input-directory <directory_or_file>
``` 

Use case:<br>
Change the input directory to a specified directory or file.

Description:<br>
Changes the input directory (suite directory) from the default (.) to whereever you point to. This is useful when you want to run a specific feature file or have a tool that relies on the execution directory.

### Output directory

Invoke with:
```bash
lucifer -o <directory>
lucifer --output-directory <directory>
``` 

Use case:<br>
Change the output directory.

Description:<br>
Changes the output directory from the default (.) to whereever you point to. The output directory is where results.json goes.

## Keep learning

- Take the [getting started tour](/products/lucifer/docs)
- Understand the [test syntax](/products/lucifer/tests)
- View the [source code](https://github.com/winstonpuckett/lucifer)