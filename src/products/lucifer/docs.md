--- 
icon: 🐲
title: Lucifer
layout: layout-product.njk
productUrl: /products/lucifer
--- 

- [Overview](/products/lucifer)
- [Installation](/products/lucifer/installation)
- [CLI Reference](/products/lucifer/cli)
- [Test Syntax](/products/lucifer/tests)
- [Source Code](https://github.com/winstonpucket/lucifer)

# Getting Started

Lucifer has two major concepts to learn:
- Building test suites
- Running the lucifer command

This page contains a simple "getting started" guide to walk you through the normal process of how you'd go about setting up and running your own lucifer suite. In doing so, we will cover the general aspects of working with lucifer. It is assumed lucifer is already installed. For installation information, [head to our installation guide](/products/lucifer/installation).

## Installation

Prerequisites:
- [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

To install lucifer, simply run the command below:

```bash
cargo install lucifer-testing
```

Then run the next command to see that lucifer was properly installed.

```bash
lucifer --version
```

## Understanding Suites

A suite is a set of features which should be run together. In literal terms, a suite is a single folder which contains one or more features.

By default, lucifer assumes that your current working directory is the suite. This is called the "input directory" and can be changed with the [--input-directory flag](/products/lucifer/cli).

### Activity - Create a suite

In your chosen directory, create a folder called "suite". This will serve as the basis for our upcoming tests.

## Understanding Features

A feature is a set of tests within a suite. You can group tests together in whatever way makes sense for the project. The concept of a feature aligns with one specific use case the cli exposes.

With lucifer, features are represented as single yaml files. The name of the file is the name of the feature.

### Activity - Create a feature

Create a file called flags.yaml in your suite folder

Within your flags.yaml, put the following line.

```yaml
command: lucifer
```

This defines what cli we are testing in each test (We'll be testing lucifer itself, by the way. It's the only command guaranteed to be on your machine 😉).

## Understanding Tests

A test is a list of arguments to pass to the command and a list of expectations which should be met as a result of its run. These tests happen to be run in order, synchronously. However, tests should always be written so that they can be run regardless of order. Without this independence, managing a suite can become cumbersome.

### Activity - Add tests to your feature

Underneath your command, enter this array:

```yaml
tests:
  - name: --no-file suppresses file generation
    description: >
      Given the "no file" flag
      When lucifer runs
      Then no file should be produced
    expectations:
      exitCode: 0
      performance: 10
      noFile: ./results.json
    args:
      - --no-file
```

The name and description here are inconsequential. You will use the name to find the test definition if it ever fails. 

The expectations object tells lucifer what to expect from the run. For more information on what each of these expectations mean, head to the [tests reference](/products/lucifer/tests).

The args array defines what should be passed to the command. You can pass integers and strings to the args object and it will act as it would if you passed the arguments into the command line.

Now that we have walked through what each major section means, let's add a second test below the one we have.

```yaml
  - name: --silent gives the correct output
    description: >
      Given the silent flag
      When lucifer runs
      Then it should output nothing
    expectations:
      exitCode: 0
      performance: 10
      output: ""
    args:
      - --no-file
      - --silent
```

Note: You should run lucifer OUTSIDE the folder we're testing. Otherwise it will go into an infinite loop. The command below will work only if you're in the parent directory.

```bash
lucifer --input-directory ./suite
```

**Now that we have a suite, run lucifer and see the results!**

lucifer should output something resembling the following:

```text
🐉 LUCIFER 🐉
Executing tests for './suite'

🐲 Feature: flags.yaml

  🎉 '--no-file produces no file' succeeded in 2ms

  🎉 '--silent gives the correct output' succeeded in 2ms
```

In addition, you should notice a new file called results.json in your current working directory. This file gives us the same information as above, but in a way which is easily readable by a computer. The consideration of the computer is also why json is chosen over yaml. We write our tests in yaml so that humans can read them easily. We output json to be interpreted by downstream systems.

JSON result from the above run:

```json
{"testResults":[{"feature":"flags.yaml","test":"--no-file suppresses file generation","succeeded":true,"milliseconds":5,"standardOut":"\n🐉 LUCIFER 🐉\nExecuting tests for '.'\n","standardError":"","exitCode":0,"failures":[]},{"feature":"flags.yaml","test":"--silent gives the correct output","succeeded":true,"milliseconds":5,"standardOut":"","standardError":"","exitCode":0,"failures":[]}]}
```

Let's see what happens when we create an unmet expectation in our tests. In the "--silent gives the correct output test, insert "any text" into the output expectation:

```yaml
      output: "any text"
```

Now rerun the tests and look at the output:

```text
🐉 LUCIFER 🐉
Executing tests for './suite'

🐲 Feature: lucifer_flags.yaml

  ❌ '--silent gives the correct output' failed in 3ms

    → Reproduce with: 'lucifer --silent'

    → Expected output: 'any text'
    → Actual output: ''

  🎉 '--no-file produces no file' succeeded in 4ms
```

Notice that the text now shows red, tells you how to reproduce the error, and gives you information on which expectations failed and how. Similar information is written to results.json

```json
{"testResults":[{"feature":"flags.yaml","test":"--no-file produces no file","succeeded":false,"milliseconds":5,"standardOut":"\n🐉 LUCIFER 🐉\nExecuting tests for '.'\n","standardError":"","exitCode":0,"failures":[{"type":"fileExists","expectation":"","actual":"./results.json"}]},{"feature":"flags.yaml","test":"--silent gives the correct output","succeeded":true,"milliseconds":5,"standardOut":"","standardError":"","exitCode":0,"failures":[]}]}
```

## Full file

suite/flags.yaml
```yaml
command: lucifer
tests:
  - name: --no-file suppresses file generation
    description: >
      Given the "no file" flag
      When lucifer runs
      Then no file should be produced
    expectations:
      exitCode: 0
      performance: 10
      noFile: ./results.json
    args:
      - --no-file
  - name: --silent gives the correct output
    description: >
      Given the silent flag
      When lucifer runs
      Then it should output nothing
    expectations:
      exitCode: 0
      performance: 10
      output: ""
    args:
      - --no-file
      - --silent
```

## Keep learning

- Dive into the [cli](/products/lucifer/cli)
- Understand the [test syntax](/products/lucifer/tests)
- View the [source code](https://github.com/winstonpuckett/lucifer)
