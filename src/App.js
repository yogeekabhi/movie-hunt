import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Landing />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
