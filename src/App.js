import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Youtube from "./components/Youtube";
import "./app.css"
import "./index.css"
import "../src/components/header.css"
import "../src/components/hero.css"
import "../src/components/about.css"
import "../src/components/youtube.css"
import "../src/components/footer.css"
import "../src/components/videos.css"

export default function App() {
  return (<div>
      <Header/>
      <Hero/>
      <Youtube/>
  </div>);
}
