# react

React is library for building user interfaces.

React = Declarative UI Programming. With React we define target UI state - not the steps to get there

Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!

## Using "Just JS" isn't a Great Option

* It quickly becomes *cumbersome*
* It quickly becomes *error-prone*
* It quickly becomes *hard to mantain* or edit
* *React* offers a way simpler *Mental Model*

## About This Course

<img title="About This Course" alt="About course" src="/01-getting-started/010-assets/about-course.png">

React Projects use a Build Process that transform our code.

### Why use Variables?

1. Reusability: store value in a variable => Don't repeat yourself
2. Readability: organize our code over several lines

### What is a Component?

Components are reusable building blocks in our user interface. Component are in the end just a combination of `HTML` code, `CSS` code styling and possibly `Javascript` code for some logic.
React is all about components.

### How is a Component Built?

React allow us to create re-usable and reactive components components consisting HTML, CSS and JavaScript.
React uses something which is Declarative approach for buiding these components, that means we dont tell react that a certain HTML element should be created and insertin in a specific place on the user interface as we would be doing it with Vanilla JS. Instead with React we will always define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.

### What is JSX?

JSX Stands for `JavaScript XML`. Because HTML in the end is XML. We can use JSX syntax. Which is not normally supported in the browser.

### How React works?

* Imperative Code

```js
const paragraph = document.createElement('h2');
paragraph.textContent = "Let's get started!";
document.getElementById('root').append(paragraph);
```

* Declarative Code

```js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}
```

**Note**: A component en React is just a JavaScript function. A special kind of function regarding what it returns.

### Props

Props are the `attributes` of our components. We can pass data to the custom component by adding a attribute. We can then get access to all these attributes. This concept is just called props in React.

Passing data via props:

```js
<div>
  <h2>Let's get started!</h2>
  <ExpensiveItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
</div>
```

Getting data via props:

```js
function ExpensiveItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
```
