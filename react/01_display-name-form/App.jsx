import "./App.css";
import { useState } from "react";

// 2025-02-22
// 課題　フォームの基本
// 1.名前を入力できるフォームを作る
// 2.入力内容をリアルタイムで表示する
// 3.ボタンを押すと、入力した名前をアラートで表示する
//
// useState を使って入力値を管理する
// onChange で入力値を取得する
// onClick でアラートを表示する

function App() {
  const [name, setName] = useState("noname");

  function handleChange(e) {
    setName(e.target.value);
  }

  function clickChange() {
    alert(name);
  }

  return (
    <>
      <p style={{ textAlign: "center" }}>{name}</p>
      <label htmlfor="name">Name: </label>

      <input
        type="text"
        id="name"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <p align="center">
        <button type="button" onClick={() => alert(name)}>
          Call Name!
        </button>
      </p>

      {/* アロー関数使わない場合           */}
      {/* <input type="text" id="name" value={name} onChange={handleChange} />
     <p align="center">
       <button type="button" onClick={clickChange}>Call Name!</button>
     </p> */}
    </>
  );
}

export default App;


