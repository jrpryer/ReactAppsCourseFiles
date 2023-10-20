If there is only 1 statement in the arrow function, curly braces are optional
If there is only 1 argument, you can omit parentheses 

```js
let arr2 = (i) => { console.log(`in arrow func ${i}`); }
arr2(20)

const arr3 = i => console.log(`in arrow func ${i}`);
arr3(10)
```

Exporting is done with the export keyword, used after the definition
	- Wherever you want to make use of that, you must import it
	- Ex: import add from "./add"  (for the default export)
	- Ex: import { sum } from "./add" (for named exports) 

```sh
npx create-react-app appName
npm start
```


In react, whatever you want to share to a user, all those elements are implemented at the tag:
```html
<div id="root">
```
- (as defined in the ./src/index.js)
- This helps define the rendering of the browser DOM

React us a JS library for building UI for single page applications ( SPA )
A React **Element** is an HTML tag 


# JSX

In the previous approach we created elements using a long-hand approach. Instead, we can simplify this using JSX
	- JSX stands for JavascriptXML, and allows us to write HTML in React
	- In it syntactic sugar over regular React code
	- It is the most common/highly recommended approach

Whatever you render back **has to be wrapped** together into one outer element

- In JSX you can also make use of JS variables and thus the context of JSX can change dynamically 
- Syntax to use variable expressions is as follows

{}	
- Whatever is inside the {} as a variable or expression

# Thinking the React way
- Break down your page into smallest independent reusable parts
	- Header, footer, sidebar, menu bar, main contents, etc.
- These portions are called components
- The are two ^849387
	- Functional Components
		- Create a function
		- From this, return JSX
		- Use this component as an HTML tag when you need it
	- Class Components

Benefits of components:
- They are reusable
- Props can be passed to them
- Props are Read-Only, and cannot have their value changed**
	
Component names, their storage locale, and other conventions are up to the team…
Although it is recommended to make a ./src/components [[React Set-Up#Directory Structure|subdirectory]]

## Component Communication
- Is done use props form parent to child
- Uses functions as props when we want to communicate from child to parent
* It is done using 'props' from parent to child components
	* Objects can also be passed as properties from Parent to child; while doing that you must be sure the value is returned in {}
* It is done using function as props* from child components to parent components.



Conditional rendering, can be done the following ways:
1 If Else
2. Variable
3. Ternary Operator
4. Short Circuit Operator

## Hooks

- Hooks can only be used inside React's Functional Components
- Hooks must be called at the top level of Functional Components

### Need of State
There are times during runtime where you might want to modify the value of a variable. 
if the value of a var is modified accordingly, we will want to update the UI
To achieve this, we have to be creating State Variables

State Variables are mutable (unlike properties sent from the parent), local to the component, and only managed within the component within which they are declared
Declaration of a state variable defers based on the type of component it is ([[#^849387|Functional vs Class]])


#### History:
Prior to React v16.8, state management wasn't even possible in Functional Components, so Class Components were primarily used.
After v16.8, React offers Hooks, which allows us to use React features (like state management) in functional components as well
So for state management to work in Functional Components, we need to use a Hook called **useState()**

#### useState()
- Built-in hook provided by React
- It accepts an initial state {state can be either a primitive variable, array, obj, etc.}
- It returns an array with 2 elements: 
	1) modified state
	2) function to modify the state
- useSate is used with array destructing syntax 
- If you want to change the state, you call the setter function

{You can do a LOT with useState() hooks...}


Passing a var from App down to component G looks like:
App > C > D > G, even though C and D don't need it

So instead we use, useContext()


#### useContext()
Step 1: Define context constant
```js
import { createContext } from 'react'
export const myContext = createContext(); // Step 1: define context constant
```
Step 2: 
```js
function App() {
  return (
    <div className="App">
    <myContext.Provider value={"Walmart"}> {/* Step2 */}
```
Step 3:
```js
import React, { useContext } from "react"
import { myContext } from "../App"

...
const company = useContext(myContext) // Step 3: useContext()
```


#### useEffect()

```js
    // TODO: Call totalCount whenever the 'count' car changes
    // How? A: using 'useEffect' hook

    function totalCount() { // executed whenever there is a change in the number of employees
        setCount(emps.length)
        props.calculateCount(count)
    }

    // fill with the functionality we want to perform
    useEffect(()=>{
        totalCount();
    }, [count])
    // This second arg is the array of var that - on change of their values - we want to carry out in the first arg
```


## Routing
{"Enhancing" an SAP}
Routing is used to navigate between components, mapped to the URI. 
- The library is not available by default, so it has to be installed separately 

```zsh
npm install react-router-dom
```

- Link is used instead of an \<a\> tag
- Route: it defines the URL and the child components for a route
- Routes: wraps all the routes 
- BrowserRouter: it defines the routing scope and wraps Routes
- a form of catch-all route is: "/\*"

### useNavigate()
To send traffic to a specific route

```js
    const navigate = useNavigate()
    function handleLogin() {
        if(credentials.user === 'admin' && credentials.password === 'pass') {
            setMessage('Login Successful')
            console.log('Login Successful')
            props.notifyUserLoggedIn(true)
            sessionStorage.setItem('isUserAuthenticated', true)
            navigate('/employees')
```





---

### Retrieving data through REST

```sh
npx create-react-app demo-rest-call
```



There are many ways to fetch data from a backend in React
The following 2 are very popular
- fetch-api
	- Benefit of fetch-api is that is is part of the standard Javascript library, so no extra install of libraries are needed. 
	- But we do have to deal with two promises to fetch data. hence it becomes cumbersome to deal with fetch-api
	- In order to avoid this complexity of using two promises, the following open source library is used, known as AXIOS

Now its on us to dig into:
- AXIOS
- Redux
- Testing 
	- Conventionally, you will have all three of these per component:
		- \<Component\>.js
		- \<Component\>.css
		- \<Component\>.test.js


# Session End


Feedback: https://feedbackally.walmart.com/survey/KdCa6fn_sesGy-E/

Post Test: https://docs.google.com/forms/d/e/1FAIpQLSeTLKewbZsZ8Xgzooq8oQDqUkKfRY33VL8iZljnQMVpd4hrOg/viewform

www.linkedin.com/in/sandeep-chatuphale



---
---
---


# Day 5 demo notes:

Modify SearchEmployee Component which renders radio button to allow user to sort Records based on different criteria.



---

Menu Component Should show appropriate Menus based on whether user is Logged OR NOT


---


# demo-epayment
Create a new project called "epayment"
Create components to form the user interface containing:
	i) Application name at the top of the page
	ii) A menu with options: 
		-Find a transaction
		-New Transaction
	iii) A search box which asks for an orderId
	iv) A list of all transactions which are found from the search

Application MUST provide following features to the user

1) Sort Transactions based of amount (descending)
2) filter transactions based on operation 
2) Add, showAll transactions

NOTE: Transaction Object MUST have following properties
 - id - unique
 - operation (debit/credit)
 - amount
 

NOTE:
1) Make sure that application is divided into multiple different appropriate components
2) Create separate Service file to deal with data
3) Follow naming convention , appropriate directory structure, write comments if needed.