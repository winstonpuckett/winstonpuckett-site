--- 
icon: 🐲
title: Lucifer
layout: layout-product.njk
productUrl: /products/lucifer
---

- [Overview](/products/lucifer)
- [Getting Started](/products/lucifer/docs)
- [CLI Reference](/products/lucifer/cli)
- [Test Syntax](/products/lucifer/tests)
- [Source Code](https://github.com/winstonpucket/lucifer)

# Installation

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

Expected output replacing X with the version number:
    vX.X.X

### Troubleshooting

#### Command not found

It's likely lucifer was installed, but is not on the path. 
1. Head to where cargo installs packages (~/.cargo/bin by default)
1. Check there is a file called "lucifer" or "lucifer.exe"
1. Add ~/.cargo/bin to your PATH.

## Keep learning

- Take the [getting started tour](/products/lucifer/docs)
- Dive into the [cli](/products/lucifer/cli)
- Understand the [test syntax](/products/lucifer/tests)
- View the [source code](https://github.com/winstonpuckett/lucifer)
