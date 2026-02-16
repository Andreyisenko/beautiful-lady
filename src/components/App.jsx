import "./App.css";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const clickBtn = () => {
    const url = "https://fas.st/5U8mJ-";
    window.open(url, "_blank", "noopener,noreferrer");
    setIsActive(true);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <h1>Не пропусти свій шанс!</h1>
        <p>Натисни на кнопку нижче, щоб перейти та отримати бонус.</p>

        <button onClick={clickBtn} className="cta-button">
          Отримати зараз!
        </button>
      </div>

      {/* Великі бульбашки */}
      <div className="bubble big b1"></div>
      <div className="bubble big b2"></div>
      <div className="bubble big b3"></div>
      <div className="bubble big b4"></div>
      <div className="bubble big b5"></div>

      {/* Середні */}
      <div className="bubble medium b6"></div>
      <div className="bubble medium b7"></div>
      <div className="bubble medium b8"></div>
      <div className="bubble medium b9"></div>

      {/* Маленькі */}
      <div className="bubble small b10"></div>
      <div className="bubble small b11"></div>
      <div className="bubble small b12"></div>
      <div className="bubble small b13"></div>
      <div className="bubble small b14"></div>
    </div>
  );
}

export default App;
