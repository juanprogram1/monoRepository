import "./css/App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const userName = "Juan";
  const [message, setMessage] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:3000");

    socketRef.current.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket is open");
    };

    socketRef.current.onmessage = (event) => {
      const serverMessage = event.data;
      setMessage((prevMessage) => [...prevMessage, serverMessage]);
    };

    socketRef.current.onclose = () => {
      setIsConnected(false);
      console.log("WebSocket is closed");
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send("Hello from the client");
    } else {
      console.log("WebSocket is not open");
    }
  };

  return (
    <div className="App">
      <h1>Welcome to the radio {userName}</h1>
      <button onClick={sendMessage} disabled={!isConnected}>
        Send message
      </button>
      <ul>
        {message.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <p>
        {isConnected ? "Conectado al servidor" : "Desconectado del servidor"}
      </p>
    </div>
  );
}

export default App;
