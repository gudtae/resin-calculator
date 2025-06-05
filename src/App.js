import "./styles.css";
import { useState } from "react";

export default function App() {
  const [resin, setResin] = useState(0);

  function handleMinusOne() {
    setResin(Math.max(0, resin - 1));
  }
  function handleMinusFive() {
    setResin(Math.max(0, resin - 5));
  }
  function handlePlusOne() {
    setResin(resin + 1);
  }
  function handlePlusFive() {
    setResin(resin + 5);
  }
  function handleClear() {
    setResin(0);
  }

  return (
    <div className="App">
      <h1>Resin Calculator</h1>
      <p className="subtitle">Точный расчет густой смолы</p>

      <div className="counter-container">
        <div className="counter-display">
          <span className="resin-amount">{resin}</span>
          <span className="resin-label">единиц</span>
        </div>

        <div className="counter-controls">
          <button className="control-btn large minus" onClick={handleMinusFive}>
            -5
          </button>
          <button className="control-btn minus" onClick={handleMinusOne}>
            -1
          </button>
          <button className="control-btn plus" onClick={handlePlusOne}>
            +1
          </button>
          <button className="control-btn large plus" onClick={handlePlusFive}>
            +5
          </button>
        </div>
      </div>

      <div className="summary">
        <div className="total-value">{resin * 40}</div>
        <div className="total-label">Всего слабой смолы</div>
      </div>

      <button
        className="reset-btn"
        onClick={handleClear}
        disabled={resin === 0}
      >
        Сбросить
      </button>
    </div>
  );
}
