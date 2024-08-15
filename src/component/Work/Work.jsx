import React, { useState } from "react";
import styles from "./Work.module.css";

function Work() {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [results, setResults] = useState([]);

  const handleShortClick = () => {
    if (inputValue === "") {
      setHasError(true);
    } else {
      setHasError(false);
      setResults([...results, { text: inputValue, isCopied: false }]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      setHasError(false);
    }
  };

  const handleCopyClick = (index) => {
    setResults(
      results.map((result, i) =>
        i === index ? { ...result, isCopied: true } : result
      )
    );
    setTimeout(() => {
      setResults(
        results.map((result, i) =>
          i === index ? { ...result, isCopied: false } : result
        )
      );
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
            value={inputValue}
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
      {results.map((result, index) => (
        <div key={index} className={styles.result}>
          <div className={styles.inputDisplay}>
            <span>{result.text}</span>
          </div>
          <div className={styles.resultDisplay}>
            <span>result</span>
            <div
              onClick={() => handleCopyClick(index)}
              className={styles.copy}
              style={{
                backgroundColor: result.isCopied
                  ? "#3a3053"
                  : "hsl(180, 66%, 49%)",
              }}
            >
              {result.isCopied ? "Copied!" : "Copy"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
