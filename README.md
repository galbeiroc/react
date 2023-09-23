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

There are alternatives ways of passing & receiving/handling `props`.

```js
<ExpensiveItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
```

or

```js
<ExpensiveItem expense={expenses[0]} />
```

Receiving props by object destructuring.

```js
function ExpensiveItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
}
```

### Composition

React has special prop, which every component receives, even if we're never setting it explicitly.
It's the `children` prop. Children is a reserved name. The value of this expecial children prop  will always be the content between the opening and closing tags of our custom components.
We can build such wrapper components.

```js
function Card(props) {
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}
```

Wrapping the component:

```js
// ExpenseItem.js
function ExpensiveItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

// Expenses.js
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensiveItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpensiveItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
    </Card>
  );
}
```

We compose our Expenses and ExpensiveItem components by using Card as a wrapper, by using some uilt-in HTML elements. **Composition** is important we use it all the time when working with React. Whenever we combine components, we are using composition. The important part of compositions is this props `children` feature.

How works React underhood code when we use `JSX`:

```js
function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { expenses })
  );
}
```

### React State & Working With Events

* Handling Events: Handling events like clicks so on. We can ensure that what's visible on the screen changes.
* Updating the UI & Working with "State" we can manipulate the state and transition from state A to State B, if we want to.

React exposes default events as props which start with `on`.

```js
<button onClick={clickHnadler}>Change Title</button>
```

When the JSX code returned, it's not executing `clickHandler`. When the click occurs it is when JSX code is evaluated.

### State

State is actually not a React specific concept but it is a key concept in React as well.
Regular variables like this `let title = props.title;` not triggering such a re-evaluation. React doesn't care about it. If we have a variable inside our component and that variable changes. React ignores it.

#### usetate

This a function provided by the React library and this function allow us to define values as state where changes to these values should reflect in the component function being called again. The function `useState` returns an array where the first valueis the variable itself and the second element in the array is that updating function.

```js
const [title, setTitle] = useState(props.title);
```

We want to call the component again when our state changes by calling this state updating function `setTitle` thats happening. Because by calling this function, we are telling React taht we assign a new value to this state and that then also tells React that the component with `useState` should be re-evaluated.

#### Controlled vs Uncontrolled Components

In React, `controlled` components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.

```js
const ControlledInput = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
      <ControlledInput
        value={password}
        onChange={setPassword}
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};
```

In this example, the `ControlledInput` component receives its current value and an `onChange` callback via props. The `LoginForm` component maintains the state of email and password, and when the user types into the inputs, it calls the `onChange` callback and updates the state, which in turn updates the input values.

An uncontrolled functional component is a component that maintains its own internal state. For example:

`Uncontrolled` components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.

```js
const UncontrolledInput = ({ defaultValue, placeholder }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

const LoginForm = () => {
  return (
    <form>
      <UncontrolledInput defaultValue="" placeholder="Email" />
      <UncontrolledInput defaultValue="" placeholder="Password" />
      <button>Submit</button>
    </form>
  );
};
```

In this example, the `UncontrolledInput` component maintains its own internal state, and when the user types into the input, it calls the `setValue` function and updates the state, which in turn updates the input value.

#### Stateful vs Stateless Components

In React, a stateful component is a component that holds some state.

```js
// This is a stateful Parent element.
function Yoda() {
  const [ name, setName ] = useState("Toyoda")

  // The child component will render information passed down from the parent component.
  return <BabyYoda name={name} />;
}
```

Stateless components, by contrast, have no state.

```js
// This is a stateless child component.
function BabyYoda(props) {
  return <h2>I am {props.name}!</h2>;
}
```

*Note*: that both types of components can use props.

#### Keys

The prop `key` is used by React to keep track of the elements that have changed, that is, they are used to give an "identity" to the elements of the list.

##### Rules of keys

* Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
* Keys must not change or that defeats their purpose! Don’t generate them while rendering.

#### Condtional Rendering

Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&,` and `? :` operators.

* Conditional (ternary) operator (if)

```js
const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2020");

  const filtereChangeHandler = (selectedYear) => {
    setFiltered(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filtered === expense.date.getFullYear().toString()
  );

  let expensesContent = <p>Expenses not found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpensiveItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filtered={filtered}
          onChangeFilter={filtereChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
```

* Conditional (ternary) operator (? :)

```js
<Card className="expenses">
  <ExpensesFilter
    filtered={filtered}
    onChangeFilter={filtereChangeHandler}
  />
  {filteredExpenses.length === 0 ? (
    <p>Expenses not found.</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpensiveItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  )}
</Card>
```

* Logical AND operator (&&)

```js
<Card className="expenses">
  <ExpensesFilter
    filtered={filtered}
    onChangeFilter={filtereChangeHandler}
  />
  {filteredExpenses.length === 0 && <p>Expenses not found.</p>}
  {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
    <ExpensiveItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
</Card>
```

#### Styling Components

1. Conditional & Dynamic Styles

1.1. Dynamic inline styles
Inline styles, e.g. `<div style={{ opacity: 1 }}>`

```js
<form onSubmit={formSubmitHandler}>
  <div className="form-control">
    <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
    <input
      style={{
        borderColor: !isValid ? "red" : "#ccc",
        background: !isValid ? "salmon" : "transparent",
      }}
      type="text"
      value={enteredValue}
      onChange={goalInputChangeHandler}
    />
  </div>
  <Button type="submit">Add Goal</Button>
</form>
```

1.2. Dynamic Classes styles

```js
<form onSubmit={formSubmitHandler}>
  <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
    <label>Course Goal</label>
    <input
      type="text"
      value={enteredValue}
      onChange={goalInputChangeHandler}
    />
  </div>
  <Button type="submit">Add Goal</Button>
</form>
```

2. Styled Components

2.1 styled-components utilises tagged template literals to style your components.

```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

2.2. Styled Components & Dynamic Props

```js
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${props => props.invalid ? 'red' : 'black'};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? 'rgb(252, 198, 198)' : 'transparent')};
    border-color: ${props => (props.invalid ? 'red' : 'gray')};
    border-radius: 5px;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

2.3. Styled Components media queries

```js
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```

1. CSS Modules

3.1. Using css modules add to the class unique hash. The css file needs to be like this: `Button.module.css`.

```js
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

3.2. Dynamic styles CSS Modules

```js
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

#### Debugging React Apps

* Understanding Error Messages: Something when write code, we get errors. Errors which React catches or the React development process catches and froze at us for example this parsiing error.

`
src/App.js
  Line 43:6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
`

Another example is type:
`
src/App.js
  Line 41:33:  'addGoalsHandler' is not defined
`

* Debugging & Analizyng React Apps

<img alt="Analyze code flow" src="./08-debugging-react-apps/src/assets/code flow warning.png">

We can use **break points**. Which are another useful tool for analyzing our code for understanding it and for finding fixing errors like that.

* Using the React DevTools: we need to install *React Developer Tools* extension for the browser. Then in the browser we have to new options `Components` and `Profiler`.

<img alt="Analyze code flow" src="./08-debugging-react-apps/src/assets/react devtools.png">

#### Fragments, Portals & Refs

This feature help us write cleaner HTML code.

* Fragments: We can't return more than one "root" JSX element (we also can't store more than one "root" JSX element in a variable). Fragment is an empty wrapper component. It doesn't render any real `HTML` element to the DOM.

There are two ways to use fragments:

```js
return (
  <React.Fragment>
    <h1>Hi There!</h1>
    <p>This does work</p>
  </React.Fragment>
)
```

```js
return (
  <>
    <h1>Hi There!</h1>
    <p>This does work</p>
  </>
)
```

This is how to work fragments under the hood.

```js
const wrapper = props => props.children;
```

* Portals: Let's us render some children into a different part of the DOM.
`createPortal(children, domNode, key?)`

// index.html

```html
<div id="backdrop-root"></div>
<div id="overlay-root"></div>
<div id="root"></div>
```

// ErrorModal

```js
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErroModal.module.css";

const Backdrop = ({ onErrorHandler }) => {
  return <div className={classes.modal} onClick={onErrorHandler} />;
};

const ModalOverlay = ({ message, title, onErrorHandler }) => {
  return (
    <Card classes={classes["content-modal"]}>
      <div className={classes["header-modal"]}>{title}</div>
      <div className={classes["body-modal"]}>{message}</div>
      <div className={classes["footer-modal"]}>
        <Button onClick={onErrorHandler}>Cerrar</Button>
      </div>
    </Card>
  );
};

const ErrorModal = ({ message, title, onErrorHandler }) => {
  return (
    <>
      {createPortal(
        <Backdrop onErrorHandler={onErrorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          message={message}
          title={title}
          onErrorHandler={onErrorHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
```

* refs: we can set up a connection between a HTML element which is being rendered in the end and our other `JS` code.

```js
const AddUser = ({ handleUsers }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge  = ageInputRef.current.value;

    handleUsers({ userName: enteredUsername, age: enteredAge});
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  return (
    <Card classes={classes["content-form"]}>
      <form onSubmit={onSubmit}>
        <div className={classes["input-group"]}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            ref={usernameInputRef}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            ref={ageInputRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
```

##### Controlled vs Uncontrolled Components

The approach of usings refs to interact with DOM elements specifically with inputs elements also has a special name. we're talking about `uncontrolled` components If we access values with `refs`. It is uncontrolled because they're internal state so to value which is reflected in them is not controlled by react.

```js
import { useRef } from "react";

const AddUser = ({ handleUsers }) => {
  const usernameInputRef = useRef();

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" ref={usernameInputRef} />
    </form>
  )
};
```

The `controlled` approach inputs fields are controlled components, because internal `state` is controlled by react.

```js
import { useState } from "react";

const AddUser = ({ handleUsers }) => {
  const [username, setUsername] = useState(');

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={username} />
    </form>
  )
};
```

#### Effects, Reducers & Context

##### useEffect

The `useEffect` hook is simply another built in hook. Another function we can run inside our funcional component. That will do somthing especial.

`useEffect(() => { ... }, [dependencies]);`

The useEffect hook is called with two arguments. The first argument is function that should be executed after every component evaluation. If the specified dependencies changed. Dependencies changed are The second argument that we pass in, that's an array full of dependencies. Whenever such a dependency changes that first function will re-run.

1. No dependency passed:

```js
useEffect(() => {
    // Runs on every render
});
```

2. An empty array:

```js
useEffect(() => {
  // Runs only on the first render
}, []);
```

3. Props or state values:

```js
useEffect(() => {
  // Runs on the first render
  // And any time any dependency value changes
}, [prop, state]);
```

**What to add & Not to add as Dependencies**
We learned, that we should add "everything" we use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

* We **DON'T need to add state updating functions** (as we did in the last lecture with `setFormIsValid`): *React* guarantees that those functions never change, hence We don't need to add them as dependencies (we could though).

* We also **DON'T need to add "built-in" APIs or functions** like `fetch()`, `localStorage` etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

* We also **DON'T need to add variables or functions** we might've **defined OUTSIDE of your components** (e.g. if we create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" we use in your effect function **if those "things" could change because your component (or some parent component) re-rendered**. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

```js
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props; // using destructuring to pull out specific props values

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

In this example:

* `timerIsActive` is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

* `timerDuration` is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

* `setTimerIsActive` is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

* `myTimer` is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

* `setTimeout` is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change

4. Clean up function
It runs before every new side effect function execution. Execept for the very first time when useEffect runs.

```js
useEffect(() => {
  const identifier = setTimeout(() => {
    setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  }, 500);

  return () => { // cleanup func
    clearTimeout(identifier);
  }
}, [enteredEmail, enteredPassword]);
```

##### Reducer

The `useReducer` is another built in hook and it will help us with state management. So it's a bit like `useState` but actually with more capabilities and especially useful for more complex state. `useReducer` can be as a replacement for `useState` if we need "**more powerful state management**".

`const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);`

`useReducer` always returns an Array with exactly two values and therefore we can use destructuring. The first value is the latest state snapshot, beacuse this state management mechanism. The second value we have function that allow us to update that state snapshot. So that is kind of the same as for  `useState`. Though the state updating is function will work differently. Instead of setting a new state value. We will dispacth an action. That action will be consumed by the first argument we pass to `useReducer` a so-called *reducer function*.
`(prevState, action) => newState`

```js
const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'ISVALID_EMAIL') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
}

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'EMAIL_INPUT', val: event.target.value });

    setFormIsValid(event.target.value.includes('@'));
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'ISVALID_EMAIL' });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        <Button type="submit" className={classes.btn} disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  )
}
```
