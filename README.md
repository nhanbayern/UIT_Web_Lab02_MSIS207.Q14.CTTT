# UIT_Web_Lab02_MSIS207.Q14.CTTT
# 🧩 Mini JSX Framework - Lab02 (Nguyễn Thiện Nhân 23521084)

A lightweight **React-like JSX runtime** built from scratch using TypeScript and Vite — featuring custom hooks, component system, and a simple dashboard with interactive charts and to-do management.

---

## 🚀 Features

### 🧠 1. Custom JSX Runtime
- Implemented a **mini React runtime** manually (`jsx-runtime.ts`):
  - Supports `createElement`, `mount`, `useState`, `useEffect`, and `useRef`.
  - Virtual DOM rendering and diffing logic simplified for learning.
  - Hook index tracking and rerendering via `requestAnimationFrame`.
- Added hook lifecycle control with `resetHooks()` and `runEffects()` to mimic React’s behavior.

### 🔁 2. Custom Hook System (`hooks.ts`)
- Supports:
  - `useState` – local component state.
  - `useEffect` – side effect with cleanup & dependency tracking.
  - `useRef` – persistent mutable value.
- Effects are queued and run after rendering for correctness.

### 📊 3. Interactive Dashboard (`dashboard.tsx`)
- Generates **randomized car sales data** per brand and region using `data-service.ts`.
- Renders **3 chart types**:
  - Bar Chart
  - Line Chart (with gradient fill, HD scaling, anti-alias fix)
  - Pie Chart
- All charts built on **HTML5 Canvas API** (`chart.tsx`):
  - Custom drawing logic per chart type.
  - Tooltips, hover effects, click events.
  - Color palette inspired by modern UI tones:
    - `#EE6055` (Fire Opal)
    - `#17BEBB` (Blue Green)
    - `#AAF683` (Mint)
    - `#FFD97D` (Yellow)
    - `#FF9B85` (Tangerine)
- “🔄 Refresh Data” button regenerates and redraws random dataset.

### 📝 4. To-Do List (`todo-app.tsx`)
- Add / toggle / delete tasks.
- Auto counter for completed vs total tasks.
- Optional filtering (All / Active / Done).
- State managed via `useState`, rendered dynamically through JSX.

### 🔢 5. Counter Component (`counter.tsx`)
- Simple stateful counter (Increment / Decrement / Reset).
- Demonstrates hook reactivity and re-rendering flow.

### 🧩 6. UI & Styling
- Single global stylesheet `src/style.css` using **Google Font Montserrat**:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
