import "./App.css";
import Layout from "./Layout";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-white text-gray-900' 
        : 'bg-[#0a0a0a] text-white'
    }`}>
      <Layout />
    </div>
  );
}

export default App;
