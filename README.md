# Notes

build of an application called **Notesy** :v:

### Author: Yasmin Adaileh :sunglasses:

### Links and Resources :paperclip:

[submission PR](https://github.com/yasmin-401-advanced-javascript/notes/pull/5)

## Library Used

### Modules

#### `notes.js`

#### `input.js`

In this app I used only the **minimist** & **jsdoc**

## Instruction How to Install the Library

1. `npm i minimist` run it in the command line(Ubuntu)
1. `npm i jsdoc` run it in the command line(Ubuntu)
1. `npm i -D jest` run it in the command line(Ubuntu)


## How to run the app? :runner:

in the **Ubuntu** just type:
`npm test`

## UML

# ![UML](urm.png)


# Understanding for me.
## Realted to class :one:

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
----------------------------------
## Realted to class :two:

### What is Test-Driven Development (TDD)?

it's a process where you start with coding your test then after that you will be able to start the real code to pass the test you've been written. This will help as to check against our test when we're going to do a big refactor and this will make you know where it has failed and where it passes.

### what we need to do the testing?

Wn need to install a new **dependency** called **jest** as a dev dependency this mean its require to use when we're developing but when we're deploying and running on another potential server it shouldn't install the dev dependency.

`npm i -D jest` run it in the command line(Ubuntu)

Whenever we install it we need to add script in our `package.josn` to tell our application to run this script to test.

in the package.josn file at the script object there is a test key we will change the value of it into
`"jest --coverage --verbose"`
**coverage** it will show you the **coverage record**
**verbose** it will give you more **explanation** about the test.

the file we'll write inside it the test should have **.test.js** extantion.

[jest Method resources](https://jestjs.io/docs/en/expect)
[jest object resources](https://jestjs.io/docs/en/jest-object)
-----------------------------------------------------

`jest.spyOn(object, methodName)`

If you want to overwrite the original function, you can use

`jest.spyOn(object, methodName).mockImplementation(() => customImplementation)`
or
`object[methodName] = jest.fn(() => customImplementation);`

**Example**

```
const video = {
play() {
  return true;
},
};

module.exports = video;
```

**Example test:**

```
const video = require('./video');

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});
```
in our lab we want to spy over the **console**. The **console** is in the `global` **object** and the **method** will be `'log'`

`jest.spyOn(global.console , 'log')`

**without the spyOn** it will faild and we will see in the console 
`value must be  a mock or spy function`

this will give as the ablity to know if it's was called or not
then the 
```
describe ( 'what we are describing and this is a static statement', ()=> { 
   it(' dose nothing when execute() is called with invalied message ' , () => {

   })
})
```
after run the npm test we'll see this 
```
 notes module \\ this is comming from the describe
    ✓  dose nothing when execute() is called with invalied message  (7 ms) \\ this is comming from the it
```
this is for the notes.js
-----------------------------------------

`jest.mock(minimist)` 
which mean we are mocking the minimist library and we will give it a mock implementation.

minimiest.mockImplementation(()=>{

})

Modules that are **mocked** with `jest.mock` are mocked only for the file that calls jest.mock. Another file that imports the module will get the original implementation even if it runs after the test file that mocks the module.

Returns the jest object for chaining.

**Example:**
```
// banana.js
module.exports = () => 'banana';

// __tests__/test.js
jest.mock('../banana');

const banana = require('../banana'); // banana will be explicitly mocked.

banana(); // will return 'undefined' because the function is auto-mocked.
```
mock..
---------------------------------------------------
![welcome](./img/memesMango.jpg)
## Realted to class :three:
## mongoose & :boar: 
![mongoose](./img/animalMongoose.jpg)

Let's start talk about mangoose **temon & bomba** :joy:

### NoSQL database => MongoDB 

**SQL databsae** which is like **postgres** or **mySQL** and it's use for **object-relational database management system** and it is **Object-relational mapping (ORM)** 

**MongoDB** is a **schema-less NoSQ**L document database and it can contain a **big amount of data** and **mongoose** it is  an **Object Data Modeling (ODM)** which manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
without writing big query like what we did in 301.

this is format of the data we'll ganna have it from MongoDB `{**JOSN fomat**}`
![MongoDB](./img/mongoDB.PNG)

**Collection**  => ( equivalent to **tables** in relational databases). 
**Document**  => (equivalent to **records or rows** of data in SQL).
**Fields**  => (similar to **columns** in a SQL table). 
**schema**  => (document data structure)**shape of the document** that is enforced via the application layer.
**Models** => (equivalent to records in a relational database)higher-order constructors that take a schema and create an instance of a document.

The new **dependency** for it is `npm i mongosse`  and we will need also `dotenv`, `superagent`.

**to create a new schema :**
```
const schemaName = new mangoose.Schema({
here we'll pass our objs.
});

module.exports = mongoose.model('this will be the name of the collection', schemaName); //schemaName will be the schema.
```
in mongoDBB we don't need to create the database to store data inside it.

to **run mongo** in terminal type : `mongo`
to **see ur databases** type : `show dbs`

to connect the db :
```
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

use the **async function** with MongoDB 

we need to use the **mongo compass** because things will be so **messy in the Ubuntu** so to save time and be organized we'll use it.
we can see our collection from there and we can **add data** to our database or **find data** or even **delete data** 
![compass](./img/compass.PNG)
----------------------------------
## Realted to class :four:

## testing & supergoose ..

I faced an issue with the `.then` because I had used for the async function in the notes.js page and I think if we want to use the .then in such situation we need to use a promise function before the .then 