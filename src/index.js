// index.js
import "./styles.css";

// src/index.js
import odinImage from "./img/odin.png";
import { createMemo } from "./memo.js";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

//temp memory storage for meos
const memos = [];

// create
const memo1 = createMemo("Buy milk");
const memo2 = createMemo("Study JS");
memos.push(memo1, memo2);
console.log(memos);

// toggle

memo1.toggle();
console.log(memo1.completed); // true
