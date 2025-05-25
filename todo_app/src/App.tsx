// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contador from './pages/Contador';
import Home from './pages/Home';
import Todo from './pages/Todo';
import TodoVideo from './pages/TodoVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo-video" element={<TodoVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
