export const reactQuestions = [
  {
    title: "Functional component that accepts props and displays a personalized message",
    problem: "Create a functional component that accepts props and displays a personalized greeting message. The component should accept a 'name' prop and render it.",
    code: `function Greeting(props) {
  return <h2>Hello, {props.name}! 👋</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Akshay" />
      <Greeting name="Rahul" />
      <Greeting name="Priya" />
    </div>
  );
}

export default App;`
  },
  {
    title: "Class component with counter — increase and decrease buttons",
    problem: "Create a class component that maintains a counter state and provides buttons to increase and decrease the counter value.",
    code: `import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Class Component Counter</h2>
        <h1 style={{ fontSize: "64px", margin: "20px" }}>
          {this.state.count}
        </h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          style={{ margin: "8px", padding: "10px 24px", fontSize: "18px" }}>
          + Increase
        </button>
        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}
          style={{ margin: "8px", padding: "10px 24px", fontSize: "18px" }}>
          - Decrease
        </button>
      </div>
    );
  }
}

function App() {
  return <Counter />;
}

export default App;`
  },
  {
    title: "Functional component with counter — increase, decrease and reset",
    problem: "Create a functional component that maintains a counter using useState hook and provides buttons to increase, decrease and reset the counter.",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Functional Counter (useState)</h2>
      <h1 style={{ fontSize: "64px", margin: "20px",
        color: count > 0 ? "green" : count < 0 ? "red" : "gray" }}>
        {count}
      </h1>
      <button onClick={() => setCount(count + 1)}
        style={{ margin: "8px", padding: "10px 20px", fontSize: "16px" }}>
        + Increase
      </button>
      <button onClick={() => setCount(count - 1)}
        style={{ margin: "8px", padding: "10px 20px", fontSize: "16px" }}>
        - Decrease
      </button>
      <button onClick={() => setCount(0)}
        style={{ margin: "8px", padding: "10px 20px", fontSize: "16px", background: "#e74c3c", color: "white" }}>
        Reset
      </button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;`
  },
  {
    title: "Functional component displaying a running clock and current date",
    problem: "Create a functional component that displays a running clock showing current time and date, updating every second using useState and useEffect hooks.",
    code: `import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      minHeight: "60vh", background: "#1a1a2e", color: "#00d4ff"
    }}>
      <h2 style={{ fontSize: "14px", letterSpacing: "4px", color: "#888" }}>
        RUNNING CLOCK
      </h2>
      <h1 style={{ fontSize: "64px", fontFamily: "monospace", margin: "16px" }}>
        {time.toLocaleTimeString()}
      </h1>
      <h3 style={{ fontSize: "20px", color: "#aaa" }}>
        {time.toDateString()}
      </h3>
    </div>
  );
}

function App() {
  return <Clock />;
}

export default App;`
  },
  {
    title: "Component with a form that updates state based on user input",
    problem: "Create a component with a form that updates the state based on user input using onChange event handler and useState hook. Display the live state value.",
    code: `import { useState } from "react";

function Form() {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Controlled Form Component</h2>
      <div style={{ marginBottom: "16px" }}>
        <label>Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "6px", marginLeft: "8px", width: "200px" }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label>Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ padding: "6px", marginLeft: "8px", width: "200px" }}
        />
      </div>
      <div style={{
        background: "#f0f4f8", padding: "16px",
        borderRadius: "8px", marginTop: "20px"
      }}>
        <h4>Live State:</h4>
        <p>Name: <strong>{name || "—"}</strong></p>
        <p>Email: <strong>{email || "—"}</strong></p>
      </div>
    </div>
  );
}

function App() {
  return <Form />;
}

export default App;`
  },
  {
    title: "React application with multiple routes using React Router",
    problem: "Create a React application with multiple routes using React Router DOM. Implement at least Home, About, and Contact pages with navigation links.",
    code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const navStyle = {
  background: "#2c3e50", padding: "12px 24px",
  display: "flex", gap: "20px"
};
const linkStyle = {
  color: "#ecf0f1", textDecoration: "none",
  fontWeight: "bold", fontSize: "16px"
};
const pageStyle = {
  padding: "40px", fontFamily: "Arial"
};

function Home()    { return <div style={pageStyle}><h1>🏠 Home Page</h1><p>Welcome to the React Router demo app!</p></div>; }
function About()   { return <div style={pageStyle}><h1>ℹ️ About Page</h1><p>This app demonstrates React Router with multiple routes.</p></div>; }
function Contact() { return <div style={pageStyle}><h1>📬 Contact Page</h1><p>Email: student@college.edu</p></div>; }

function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/"        style={linkStyle}>Home</Link>
        <Link to="/about"   style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`
  }
];