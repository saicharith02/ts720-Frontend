
import "./css/AppDesign.css"
import { ChatPage } from "./pages/ChatPage";
import LoginPage from './pages/LoginPage';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <div className="app">
      <div className="navbar">

      </div>
      {/* <LoginPage/>  */}
      {/* <SignUp/> */}
      <ChatPage/>
    </div>
  );
}

export default App;
