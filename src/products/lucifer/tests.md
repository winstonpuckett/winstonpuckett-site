--- 
icon: 🐲
title: Lucifer
layout: layout-product.njk
productUrl: /products/lucifer
---

- [Overview](/products/lucifer)
- [Getting Started](/products/lucifer/docs)
- [Installation](/products/lucifer/installation)
- [CLI Reference](/products/lucifer/cli)
- [Source Code](https://github.com/winstonpucket/lucifer)

# Test Syntax

## Command

The command specifies what cli tool to run when the feature is called. 

Datatype: string
Example:
```yaml
command: your_tool
```

## Test - General Options

Within a test, there are a couple different options listed below.

### Name

A short-ish identifier for the test. This will be displayed when the suite is run, and is therefore important to be both meaningful and searchable. While duplicate names are allowed between tests, it is discouraged for searchability.

Datatype: string
Example:
```yaml
tests: 
  - name: any name
```

### Description

A more in-depth description of the test.

Datatype: string
Example:
```yaml
tests: 
  - description: |
    Some description
    of the test
```

## Expectations

The expectations block is where you assert different things about the output of your test.

### Performance

How long, in milliseconds, is the command allowed to take before the test fails? 

Datatype: positive integer
Example:
```yaml
tests: 
  - expectations: 
      performance: 10
```

Note: The command will not stop executing after the threshold is exceeded. The main reason for this is that if the tool under test has any external state management, stopping a process in the middle could have adverse effects.

### Exit Code

What is the expected return code when this command executes?

Datatype: integer
Default: 0
Example:
```yaml
tests: 
  - expectations: 
      exitCode: 1
```

### Output

What is expected to be returned to stdout?

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      output: hello, world
```

### Error

What is expected to be returned to stderr?

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      error: goodbye, world
```

### No File

Assert that a single file does not exist after the command exits.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      noFile: path
```

### File

What files should exist and what should be in those files?

Datatypes:
- file: array of (path, matches) objects
- path: string
- matches: array of string
Example:
```yaml
tests: 
  - expectations: 
      file: 
        - path: ./path/to/file
          matches:
            - something which should be in the file
            - something else which should be in the file
        - path: ./path/to/other/file
          matches:
            - hello, earth
            - hello, moon
```

## Examples

Here's a test which specifies every possible argument along with descriptions of what each means:

```yaml
# Which command do you want to run for each test?
command: lucifer 
# The array of tests to run.
tests:
  # Printed during execution - important for searchability when test fails.
  - name: Any name
    # Provides a deeper level of information into what the test is supposed to assert.
    # Given, When, Then is a great, succinct way to express this.
    description: |
      Given any string
      When any string
      Then any string
    # The set of assertions.
    expectations:
      # Asserts the performance in milliseconds (default 1000)
      performance: 1000
      # Asserts the expected exit code matches what is returned when the tool is run. 
      exitCode: 1234
      # Asserts the console output of the command matches what is notated here.
      output: console output string
      # Asserts the console error stream of the command matches what is notated here.
      error: console error string
      # Asserts the file below does not exist.
      noFile: path/to/file/which/should/not/exist
      # Asserts file stuff.
      file:
        # Asserts filepath points to a file
        - path: ./file/which/exists
        # Asserts filepath points to a file and that file contains eveything in matches
        - path: ./other/file
          matches:
            - strings
            - in the
            - file
    # A list of arguments to pass to the command.
    args:
    - "1" # Can be passed as strings
    - 1 # Can be passed as integers
    - 1.5 # Can be passed as decimals
```

Lucifer is fully tested with itself. For real life examples of how to organize a suite, reference the [test folder in the source code](https://github.com/winstonpuckett/lucifer/tree/main/tests)

The code there gives examples of:
- Managing test data
- Every type of expectation
- And probably an example of what you're looking for

## Keep learning

- Take the [getting started tour](/products/lucifer/docs)
- Dive into the [cli](/products/lucifer/cli)
- View the [source code](https://github.com/winstonpuckett/lucifer)
