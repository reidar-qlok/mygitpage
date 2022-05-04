import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <nav>
        <ul className="my-list">
          <li>Home</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to the homepage</h2>
        <p>You will get more information later</p>
      </main>
    </>
  );
}
function About() {
  return (
    <>
      <nav>
        <ul className="my-list">
          <li>
            <Link to="/."></Link>Home
          </li>
          <li>About</li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to read more information about me</h2>
        <p>I am a man living far north in a country called sweden, </p>
        <p>
          Sweden is the largest country in the Nordic Region and has the biggest
          population. For many people, it is synonymous with flat-pack
          furniture, innovation, iron and steel. The country spends 3% of GDP on
          research and development.
        </p>
        <p>
          Sweden shares land borders with Norway in the west and Finland in the
          northeast. It also has coasts facing its Nordic neighbours Denmark,
          Norway, Åland and Finland.
        </p>
        <p>
          I am not born in sweden, but born anyway. I am intrested in music and
          i am not playing computer game anymore?
        </p>
      </main>
      <section></section>
      <footer></footer>
    </>
  );
}
function Privacy() {
  return (
    <>
      <nav>
        <ul className="my-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Privacy</li>
        </ul>
      </nav>
      <main>
        <h2>Privacy</h2>
        <p>We are very private</p>
      </main>
    </>
  );
}

export default App;
