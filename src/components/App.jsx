import "./App.css";
import { useState, useEffect } from "react";
import bgImage from "../assets/8march-2.jpg";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const title = "Найкращі подарунки для твоєї коханої!";

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 1000);
    const buttonTimer = setTimeout(() => setShowButton(true), 3000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const clickBtn = () => {
    const url = "https://fas.st/oe6ZU";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className={`content ${showContent ? "show" : ""}`}>
        <h1 className="animated-title">{title}</h1>
        <p>Не пропусти момент, натискай та обирай саме зараз</p>

        {/* Завжди рендеримо кнопку, але opacity керуємо через клас */}
        <button
          className={`cta-button ${showButton ? "show-btn" : ""}`}
          onClick={clickBtn}
        >
          Обрати зараз!
        </button>
      </div>
    </div>
  );
}

export default App;
