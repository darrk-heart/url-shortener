import React, { useState } from "react";
import styles from "./Work.module.css";

function Work() {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleShortClick = () => {
    if (inputValue === "") {
      setHasError(true);
      setShowResult(false);
    } else {
      setHasError(false);
      setShowResult(true);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value != "") {
      setHasError(false);
    }
  };

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <div className={styles.main}>
      <div className={styles.display}>
        <div
          className={styles.text}
          style={{ border: hasError ? "2px solid red" : "2px solid white" }}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            onChange={handleInputChange}
          />
        </div>
        <span
          className={styles.error}
          style={{ display: hasError ? "block" : "none" }}
        >
          Please add a link
        </span>
        <div onClick={handleShortClick} className={styles.label}>
          Shorten It!
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.inputDisplay}>
          <span>input</span>
        </div>
        <div className={styles.resultDisplay}>
          <span>result</span>
          <div
            onClick={handleCopyClick}
            className={styles.copy}
            style={{
              backgroundColor: isCopied ? "#3a3053" : "hsl(180, 66%, 49%)",
            }}
          >
            {isCopied ? "Copied!" : "Copy"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
