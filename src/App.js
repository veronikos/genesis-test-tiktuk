import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" exact element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

const GetUserFeed = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/user/feed/dave.xp",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "3da7ce47c3msh465668487e1913cp113979jsn0fe4d4627933",
  },
};

axios
  .request(GetUserFeed)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default App;
