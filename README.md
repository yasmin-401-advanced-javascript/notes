# Notes

build of an application called **Notesy** :v:

### Author: Yasmin Adaileh :sunglasses:

### Links and Resources :paperclip:
[submission PR](https://github.com/yasmin-401-advanced-javascript/notes/pull/1)
## Library Used

### Modules
#### `notes.js`
#### `input.js`

In this app I used only the **minimist** & **jsdoc**

## Instruction How to Install the Library

1. `npm i minimist` run it in the command line(Ubuntu)
1. `npm i jsdoc` run it in the command line(Ubuntu)

- we didn't use the **test** yet.

## How to run the app? :runner:

in the **Ubuntu** just type:
`node notes.js --anyKeyYouWant add||Add||a||A||ADD -a||--add 'And type Here Your Note'`

## UML
![UML](urm.png)
============================================================================================================
# Understanding for me.
### What is Node.js?

It is a platform built on Chrome's JavaScript **runtime** for easily building fast and scalable network applications.

```
Running JavaScript **without/outside a browser** means:
   - using **node.js technology** to execute the JavaScript code.
```

### What is Modular Programming?

In Node, the **modularity** is a **first-class concept**. In the Node.js module system, each file is **treated** as a separate module. Basically modules help us **encapsulating** our code into **manageable chunks**

**Types of Module:**

1. **Core module**: Modules that come **shipped with Node.js**, e.g. `https`, `os`, `fs`, `net`, etc.
1. **Third-party module**: Modules that **you install** from any package manager.
1. **Local module**: These are the modules that **we create** for our own use.

**Benifets of using the moduls:**

1. make code **Reusable**
1. for **testing**

**httpi** it is a **command line tool** do what superagent do.

**Library** used :

1. `"is-url"`: `"^1.2.4"`
2. `"minimist"`: `"^1.2.5"`

### 1st Party/3rd party library

1. **1st party**: JS loaded from the **same location** as the webpage.
1. **3rd party**: JS loaded from **different location** as the webpage is considered to be 3rd party.

**minimist library** used to read command line arguments
