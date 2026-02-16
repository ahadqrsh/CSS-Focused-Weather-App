import Input from "./components/Input";
import "./App.css";
import { useWeather } from "./context/Weather";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const weather = useWeather();

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">

      {/* Parallax background layer - fixed with animated gradient mesh */}
     <div
  className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M30 30 L30 30%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22 fill=%22none%22/%3E%3C/svg%3E')] bg-fixed opacity-20"
/>


      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="fixed top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12 min-h-screen backdrop-blur-sm">

        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200 mb-8 drop-shadow-lg animate-fade-in">
          Weather App 
        </h1>

        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mb-8 transform hover:scale-105 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <Input />
          <Button />
        </div>

        <Card />

      </div>
    </div>
  );
}

export default App;
