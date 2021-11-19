import React, { useState } from "react";
import { HeaderRoot, Li, Logo, Button, RandomName } from "./Header.ui";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [data, setData] = useState("");
  const getData = () => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setData(response.data.results[Math.floor(Math.random() * 10)].name);
      console.log(data);
    });
  };

  return (
    <nav id="AppHeader">
      <HeaderRoot className="title">
        <ul>
          <Li>
            <Link to="/">News Feed</Link>
          </Li>
          <Logo>Tik-Tuk</Logo>
          <Li>
            <Link to="/about">About Me</Link>
          </Li>

          <RandomName>
            <Button onClick={getData}>Get Random Star Wars Name</Button>
            <div>{data}</div>
          </RandomName>
        </ul>
      </HeaderRoot>
    </nav>
  );
}

export default Header;
