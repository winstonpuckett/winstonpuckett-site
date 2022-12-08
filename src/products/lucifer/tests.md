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

A short-ish identifier for the test. This will be displayed when the suite is run, and is therefore important to be both meaningful and searchable. While duplicate names are allowed between tests, it is discouraged because of searchability.

Datatype: string
Example:
```yaml
tests: 
  - name: any name
```

### Description

Give a more in-depth understanding of the test. This is useful for documentation purposes. 

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

How long, in milliseconds, is the command allowed to take before the test fails? This defaults to one second, but can be brought up much higher. The thought behind the default is that there is always an implicitly understood performance contract between the provider of the tool and the consumer. By providing a default one second timeout, in the instances where the tool is expected to take longer, a new performance budget will have to be decided on explicitly. This new performance budget will align with the developer and customer expectations. Without the default, performance budgets may be overlooked.

Datatype: positive integer
Default: 1000
Example:
```yaml
tests: 
  - expectations: 
      performance: 10
```

Note: The command will not stop executing after the threshold is exceeded. This may be changed in future releases. If it does, there could be a flag which tells the compiler whether to honor the timeout request.

### Exit Code

What is the expected return code when this command executes? 0 is the "everything went well" which most tools return by default. An error code is signified by any non-zero whole number. This is useful when you expect to receive an error code back for a certain command.

Datatype: integer
Default: 0
Example:
```yaml
tests: 
  - expectations: 
      exitCode: 1
```

### Output

What would be returned to the stdout were this to run in a terminal. If this expectation is not specified, there is no default expected output.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      output: hello, world
```

### Error

What would be returned to the stderr were this to run in a terminal. If this expectation is not specified, there is no default expected error.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      error: goodbye, world
```

### No File

Assert that a file does not exist after the command exits. This is rarely useful, but was necessary to test lucifer's --no-file flag. Because these usecases do exist, it is included in the final product.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      noFile: path
```

### File

Assert that a file exists after the command exits. If the file expection is not provided, it will be skipped.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      file: path
```

### Contents

Assert the contents of a given file. The path to the file is provided above. If the above file expectation is not given, the contents test will be skipped. If the contents test is not provided, it will be skipped.

Datatype: string
Example:
```yaml
tests: 
  - expectations: 
      file: path
      contents: good morning, earth.
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
      # Asserts the file below exists.
      file: path/to/output/file
      # Asserts contents of the file above matches what is notated below.
      # If no file is given above, this test is not run.
      contents: file output string
    # A list of arguments to pass to the command.
    args:
    - "1" # Can be passed as strings
    - 1 # Can be passed as integers
    - 1.5 # Can be passed as decimals
```

Lucifer is fully tested with itself. For real life examples of how to organize a suite, reference the test folder in the source code TODO: add link.

The code there gives examples of:
- Managing test data
- Every type of expectation
- Running your suite in CI/CD through GitHub actions
- And probably an example of what you're looking for

Source code: [github](https://github.com/winstonpuckett/lucifer/tree/main/tests)

## Keep learning

- Take the [getting started tour](/products/lucifer/docs)
- Dive into the [cli](/products/lucifer/cli)
- View the [source code](https://github.com/winstonpuckett/lucifer)