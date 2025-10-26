# React Learnings: A Vite-Based Guide 🚀

This document summarizes key concepts and steps for developing React applications using Vite.

## Create React Project using Vite

The modern way to start a React project, leveraging **Vite** for a fast development experience.

### 1\. Install Node.js

Ensure you have **Node.js** installed, as it includes `npm` (Node Package Manager).

### 2\. Install Vite (Optional but good practice)

While not strictly necessary to create a project, installing it globally or as an up-to-date package is good for consistency.

```bash
npm install vite@latest
```

### 3\. Create a New React Project

Use the `npm create vite@latest` command and follow the prompts (select **React** and your preferred language, e.g., JavaScript or TypeScript).

```bash
npm create vite@latest
```

### 4\. Run the Project

After creation, navigate into the new project directory, install dependencies, and run the development server.

#### Go to the Project Directory

Replace `project_name` with your actual project directory name.

```bash
cd project_name
```

#### Install Packages

Install the required dependencies listed in `package.json`.

```bash
npm install
```

#### Run the Basic Vite App

Starts the development server, usually on `http://localhost:5173`.

```bash
npm run dev
```

-----

## Creating Components

### Application Structure

  * **`index.html`**: The single page loaded into the browser.
  * **`main.jsx`**: The entry point where the React application is mounted to the DOM root (typically an element in `index.html`).
  * **`App.jsx`**: The root component that houses all other components and functionality for the web page.

-----

## Styling in React

### Global CSS

  * **`index.css`**: Used to manage global styles (e.g., body, overall layout, shared utility classes).
  * **`className`**: Always use `className` instead of `class` for HTML elements within JSX, as `class` is a reserved keyword in JavaScript.
    ```css
    /* In index.css */
    .card {
      color: blue;
    }
    ```
    ```jsx
    // In a component
    <div className="card">...</div>
    ```

### Component-Specific CSS (CSS Modules)

To prevent styles from bleeding into other components, use **CSS Modules**.

  * **Naming Convention**: Use the format `[ComponentName].module.css` (e.g., `Courses.module.css`).
  * **Import**: Import the styles object and access classes as properties.

<!-- end list -->

```jsx
// Example: Courses/Courses.jsx
import styles from './Courses.module.css';

// ... inside the component
<div classNameName={styles.card}>...</div>
```

### Internal (Inline) CSS

Uses a JavaScript **object** to store style rules. Property names must be **camelCase**.

```jsx
const internalStyles = {
  color: "blue",
  backgroundColor: "lightgray", // Note camelCase
  padding: "10px",
};

// ... inside the component
<div style={internalStyles}>...</div>
```

-----

## Props (Properties)

Props are how data is passed down from a parent component to a child component, similar to function arguments.

### Sending Props (Parent Component)

Data is passed like attributes in the JSX tag.

```jsx
<Course img={js} course="JavaScript" o_price="$ 299" n_price="$ 149" rating="4.2"/>
```

### Receiving Props (Child Component)

Received in the function signature as a single `props` object or using object **destructuring**.

```jsx
// Receiving with the props object
function Course(props) {
  return (
    <div className="card">
      <img src={props.img}></img>
      <h3>{props.course}</h3>
      {/* ... rest of the content */}
    </div>
  );
}

// Alternatively, using destructuring:
// function Course({ img, course, o_price, n_price, rating }) {
//   return (
//     <div className="card">
//       <img src={img}></img>
//       <h3>{course}</h3>
//       {/* ... rest of the content */}
//     </div>
//   );
// }
```

### Prop Types (Type Checking)

**Prop-Types** is a development tool used to check the types of values passed via props. This helps catch bugs early.

1.  **Installation**:

    ```bash
    npm install prop-types
    ```

2.  **Usage**: Import and attach a `propTypes` object to the component function.

<!-- end list -->

```jsx
import PropTypes from 'prop-types';

// ... (Component definition)

Course.propTypes = {
  img: PropTypes.string,
  course: PropTypes.string,
  o_price: PropTypes.string,
  n_price: PropTypes.string,
  rating: PropTypes.string,
  show: PropTypes.bool,
};
```

> **Note**: **Default props** are now largely replaced by default values in function destructuring (`function Course({ course = "Default Name" })`).

-----

## Conditional Rendering

Renders a component or element only if a certain condition is met.

### Using an `if` Check (Early Return)

```jsx
function Course(props) {
  // If the 'show' prop is false, return null (or an empty fragment)
  if (props.show !== true) {
    return null; // Don't render anything
  }
  
  // Render the component if the condition is met
  return (
    <div className="card">
      {/* ... component JSX ... */}
    </div>
  );
}
```

### In-JSX Conditional Rendering

You can use the **Ternary Operator** (`condition ? true_case : false_case`) or the **Logical AND Operator** (`condition && element_to_render`).

-----

## Dynamic Content Loading (Lists)

To render multiple components from an array of data, use the JavaScript **`Array.prototype.map()`** function.

### 1\. Data Structure

Store data in an array of objects.

```javascript
const courses = [
  {
    id: 1,
    img: html,
    course: "HTML",
    o_price: "$ 499",
    n_price: "$ 299",
    rating: "4.5",
  },
  // ... other courses
];
```

### 2\. Mapping to Components

Map the data array to an array of `Course` components. Each list item **must** have a unique `key` prop.

```jsx
const CourseList = courses.map((course) => (
  <Course 
    key={course.id} // Essential for list performance
    img={course.img} 
    course={course.course} 
    o_price={course.o_price} 
    n_price={course.n_price} 
    rating={course.rating}
  />
));

// Then render {CourseList} in your main component's return.
```

### Utility Methods (`sort` and `filter`)

You can modify the data array before mapping:

```javascript
// Sort the data by rating (ascending)
// courses.sort((x, y) => x.rating - y.rating); 

// Filter the data
// const under_200 = courses.filter((course) => course.n_price <= "$ 200"); // Note: You'll need to parse the price string to a number for comparison
```

-----

## Click Events (Event Handling)

React uses the **`onClick`** attribute for click handlers.

### Handling Arguments

To pass arguments to a function (including the event object), you must wrap the call in an **arrow function** (`() => myFunction(arg1, event)`). Directly writing the function name with parentheses (`myFunction(arg1)`) will cause it to execute immediately upon render.

```jsx
// Function definition
function BuyCourse(discount, e) {
  console.log(props.course, "Purchased with", discount, "% discount");
  console.log(e); // Synthetic Event object
}

// ... in the component's JSX
<button onClick={(event) => BuyCourse(20, event)}>Buy Now</button>
```

-----

## State Management (Hooks)

### `useState()`

Used to make a component reactive. When the **state variable** is updated using its **setter method**, React re-renders the component.

```javascript
import React, { useState } from 'react';

// Declaration: [stateVariable, setterFunction] = useState(initialValue);
const [a, seta] = useState(true);

// Update: Always use the setter function!
seta(false);
```

### `useEffect()`

Allows you to run side effects (data fetching, subscriptions, manual DOM manipulations) after a component renders.

| Dependency Array (`[dependencies]`) | When it Runs |
| :--- | :--- |
| **`[]`** (Empty array) | Only after the **initial render** (like `componentDidMount`). |
| **Omitted** (No array) | After **every** render (initial and all updates). |
| **`[dep1, dep2]`** | After the initial render, and whenever `dep1` or `dep2` **changes state**. |

```javascript
import React, { useEffect } from 'react';

useEffect(() => {
  // Side effect code here
  // State variables can be accessed inside useEffect()
}, [dependencies]); // Example: [count, name]
```

#### Clean Up Function

A function returned from `useEffect` runs when the component unmounts or before the effect runs again. Used for cleaning up subscriptions or timers.

```javascript
useEffect(() => {
  // Set up code (e.g., subscription)
  return () => {
    // Clean up code (e.g., unsubscribe, clear timer)
  }
}, [dependencies]);
```

-----

## Data Fetching and Error Handling

### Running a Mock API Server

The **`json-server`** package can quickly set up a REST API endpoint using a local JSON file.

```bash
npx json-server --watch data/data.json --port 3000 --static ./data
```

### Fetching Data

Use the browser's native **`fetch`** API (often within a `useEffect` hook) to get data from an endpoint.

```javascript
fetch("http://localhost:3000/courses")
  .then(response => {
    // 1. Check for a successful HTTP response status (200-299)
    if (!response.ok) {
      throw Error("Could not fetch the data");
    }
    console.log(response);
    return response.json(); // Convert response body to JSON
  })
  .then(data => {
    setCourses(data); // Update state with fetched data
  })
  .catch(error => {
    // 2. Handle network errors or errors thrown in the .then() block
    console.log(error);
    if (error.message.includes("Failed")) {
      setError("Server Can't be reached at the moment");
    } else {
      setError(error.message);
    }
  });
```

### Clean Up for Fetching

To prevent updating state on an unmounted component (which causes a warning), use `AbortController` in the cleanup function of `useEffect`.

```javascript
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  fetch(url, { signal })
    .then(/* ... */);

  return () => {
    // Abort the fetch request if the component unmounts
    controller.abort();
  };
}, [url]);
```

### Custom Hooks

A JavaScript function whose name starts with **`use`** that calls other Hooks. Used to reuse stateful logic across multiple components.

```javascript
const useFetch = (url) => {
  // Logic involving useState, useEffect, etc.
  
  useEffect(() => { /* ... fetching logic ... */ }, [url]);
  
  return { data, isLoading, error }; // Return values
};

export default useFetch;
```

-----

## Forms and Input Handling

### `onChange` Attribute

Used on form elements (`<input>`, `<textarea>`, `<select>`) to capture changes to the element's value. It triggers a function that typically updates a state variable.

```jsx
<input 
  value={password} 
  onChange={(e) => setPassword(e.target.value)} 
  type="password" 
  className="form-control" 
/>
```

-----

## React Router (Routing)

Enables navigation between different views (pages) in a single-page application.

### Installation

```bash
npm install react-router-dom
```

### Setup and Configuration

Uses `createBrowserRouter` to define routes and `RouterProvider` to render the application.

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <p>Something went wrong</p>
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <p>Something went wrong</p>
  }
]);

// ... in your main.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
```

### Dynamic Path Handling and Parameters

#### Navigation Programmatically

The `useNavigate` hook allows moving between routes on an event (like a button click or form submission).

```javascript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// ... inside a component
onClick={() => { navigate('/post/123'); }} 
// The path can include dynamic segments like '/post/:id'
```

#### Receiving Path Parameters

The `useParams` hook extracts dynamic segments (like `:id`) from the current URL.

```javascript
import { useParams } from "react-router-dom";

const { id } = useParams(); // 'id' corresponds to the ':id' segment in the route path
// Now 'id' holds the value from the URL, e.g., '123'
```

-----

## Context (Global State)

Context provides a way to pass data through the component tree without having to manually pass props down at every level (**props drilling**).

  * **Provider**: The component that supplies the data.
  * **Consumer**: The component that receives and uses the data.

### On the Provider Side (Creating and Supplying)

1.  **Create Context**:

    ```javascript
    import { createContext } from 'react';

    export const DataContext = createContext();
    // Sample data
    const data = "dataData";
    ```

2.  **Use Provider**: Wrap the components that need access to the data.

    ```jsx
    <DataContext.Provider value={data}>
      {/* child1 and all its descendants can now access 'data' */}
      <Child1 />
    </DataContext.Provider>
    ```

### On the Consumer Side (Accessing Data)

Use the **`useContext`** hook in any child component under the Provider.

```javascript
import { useContext } from 'react';
import { DataContext } from './provider'; // Import the context object

const MyComponent = () => {
  // Pass the actual context object to the hook
  const data = useContext(DataContext); 

  return (
    <>
      <p>Data from Context: {data}</p>
    </>
  );
}
```

-----

## `useRef()`

`useRef` is used to store mutable values that do not trigger a re-render when updated. It's commonly used to hold references to DOM elements or to store a value across renders (like an instance variable).

```javascript
import React, { useRef, useState } from 'react';

// 1. Initialize the ref
let refCount = useRef(0);

// Example function
const handleClick = () => {
  // 2. Update the value (does NOT trigger a re-render)
  refCount.current = refCount.current + 1;
  
  // Optional: Use a state setter if you need to see the change reflected on the page
  // setCount(refCount.current);
};

// Accessing the current value
console.log(refCount.current);
```