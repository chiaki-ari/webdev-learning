import "./App.css";
import { useState } from "react";

// 課題　フォームの基本
// 1.名前を入力できるフォームを作る
// 2.入力内容をリアルタイムで表示する
// 3.ボタンを押すと、入力した名前をアラートで表示する

function App() {
  const [name, setName] = useState("ほげ");

  function handleChange(e) {
    setName(e.target.value);
  }

  function clickChange() {
    alert(name);
  }

  return (
    <>
      <p>{name}</p>
      <input type="text" id="name" value={name} onChange={handleChange} />
      <button type="button" onClick={clickChange}>Call Name!</button>
    </>
  );
}

export default App;