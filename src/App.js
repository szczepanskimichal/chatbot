import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey User!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, how can I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Lern React" },
      { value: 2, label: "Lern Node.js" },
    ],
    end: true,
  },
];

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

const config = {
  botAvatar: "./logo192.png",
  // floating: true, // Usunięto, aby uniknąć ostrzeżeń i błędów
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="ChatBot" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default App;
