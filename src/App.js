import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter as Router, Route } from "react-router-dom";
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/"component={Landing}/>
            <Route exact path="/movie/:id"component={Movie}/>
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
