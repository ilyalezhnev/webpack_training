import React from "react";
import { render } from "react-dom";
import * as $ from "jquery";
import Post from "@models/post";
import image from "./assets/image.png";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./babel";

const post = new Post("Webpack Post Titile", image);

$("pre").addClass("code").html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less test</h2>
    </div>
    <div className="card">
      <h2>SCSS test</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
