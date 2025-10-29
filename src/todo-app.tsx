/** @jsx createElement */
import { createElement, useState } from "./jsx-runtime";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  // --- STATES ---
  const [getTodos, setTodos] = useState<Todo[]>([]); // ✅ dùng lazy init để tránh undefined
  const [getInput, setInput] = useState("");
  const completedCount = getTodos().filter((t) => t.completed).length;
  const totalCount = getTodos().length;

  const [getFilter, setFilter] = useState<"all" | "active" | "completed">(
    "all"
  );

  // --- FUNCTIONS ---
  const addTodo = () => {
    const text = (getInput as any).currentValue?.trim() || "";

    if (!text) return;
    setTodos([...getTodos(), { id: Date.now(), text, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    const updated = getTodos().map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  const deleteTodo = (id: number) => {
    const filtered = getTodos().filter((t) => t.id !== id);
    setTodos(filtered);
  };

  // --- RENDER ---
  let todos = getTodos() || [];

  if (getFilter() === "active") {
    todos = todos.filter((t) => !t.completed);
  } else if (getFilter() === "completed") {
    todos = todos.filter((t) => t.completed);
  }

  return (
    <div style={{ marginTop: "32px" }}>
      <h2 style={{ marginBottom: "12px", color: "#111827" }}>Todo List</h2>

      {/* input + button */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        <input
          defaultValue=""
          onInput={(e: any) =>
            ((getInput as any).currentValue = e.target.value)
          }
          placeholder="Add a task..."
          style={{
            flex: 1,
            borderRadius: "6px",
            border: "1px solid #ddd",
            padding: "8px",
            fontSize: "14px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      {/* thống kê */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ color: "#6b7280" }}>
          ✅ Completed: {completedCount} / {totalCount}
        </span>

        {/* bộ lọc */}
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={() => setFilter("all")}
            style={{
              background: getFilter() === "all" ? "#4f46e5" : "#e5e7eb",
              color: getFilter() === "all" ? "#fff" : "#111",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            style={{
              background: getFilter() === "active" ? "#4f46e5" : "#e5e7eb",
              color: getFilter() === "active" ? "#fff" : "#111",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            style={{
              background: getFilter() === "completed" ? "#4f46e5" : "#e5e7eb",
              color: getFilter() === "completed" ? "#fff" : "#111",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            Done
          </button>
        </div>
      </div>

      {/* danh sách todo */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.length === 0 ? (
          <li style={{ textAlign: "center", color: "#6b7280" }}>
            No tasks yet
          </li>
        ) : (
          todos.map((t) => (
            <li
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#f9fafb",
              }}
            >
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  color: t.completed ? "#9ca3af" : "#111827",
                  cursor: "pointer",
                  flex: 1,
                }}
                onClick={() => toggleTodo(t.id)}
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTodo(t.id)}
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export { TodoApp };
