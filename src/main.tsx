/** @jsx createElement */
import { createElement, mount } from "./jsx-runtime";
import { Counter } from "./counter";
import { TodoApp } from "./todo-app";
import { Dashboard } from "./dashboard";
import "./style.css";

const App = () => (
  <div>
    <h1
      style={{
        textAlign: "center",
        color: "#4f46e5",
        marginBottom: "24px",
      }}
    >
      Nguyễn Thiện Nhân 23521084 - Lab02 Demo
    </h1>

    <Counter initialCount={0} />
    <TodoApp />
    <Dashboard />
  </div>
);

// --- Mount app ---
const root = document.getElementById("root");
if (root) mount(<App />, root);
