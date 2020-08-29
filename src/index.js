import * as $ from "jquery";
import Post from "@models/post";
import image from "./assets/image.png";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./babel";

const post = new Post("Webpack Post Titile", image);

$("pre").addClass("code").html(post.toString());
