import "./App.css";
import { useState } from "react";

// 2025-02-25
// 課題2　簡単なバリデーション
// 1.名前入力欄を作る
// 2.入力が空白の場合は「名前を入力してください」と表示
// 3.3文字未満なら「3文字以上で入力してください」と表示

function App() {
  const [name, setName] = useState("ほげ");
  const [error, setError] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    if (e.target.value.length == 0) {
      setError("名前を入力してください");
    } else if (e.target.value.length <= 2) {
      setError("3文字以上で入力してください");
    } else {
      setError("");
    }
  }

  function clickChange() {
    alert(name);
  }

  return (
    <>
      <p style={{ textAlign: "center", color: "red" }}>{error}</p>

      <p>{name}</p>
      <input type="text" id="name" value={name} onChange={handleChange} />
      <button type="button" onClick={clickChange}>
        Call Name!
      </button>
    </>
  );
}

export default App;
