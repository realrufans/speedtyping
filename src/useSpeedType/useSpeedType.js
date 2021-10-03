 
import{ useState, useEffect, useRef } from "react";

export default function UseSpeedType() {
 
    const [wordsInput, setWordsInput] = useState("");
    const [remainingTime, setRemainingTime] = useState();
    const [isrunning, setIsrunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const inputEl = useRef(null);
    const selectEl = useRef(null);

    const onWordChange = (event) => {
      const { value } = event.target;
      setWordsInput(value);
    };

    function StartGame() {
      if (selectEl.current.value === "pick a countdown") {
        alert("Please pick a countdown!");
      } else {
        setIsrunning(true);
        setWordsInput("");
        inputEl.current.disabled = false;
        inputEl.current.focus();
        setRemainingTime(selectEl.current.value);
        setWordCount(0);
      }
    }
    function endGame() {
      setIsrunning(false);
      countWords(wordsInput);
      setRemainingTime(remainingTime);
    }

    function countWords(text) {
      const count = text.trim().split(" ").length;
      return wordsInput === "" ? setWordCount(0) : setWordCount(count);
    }

    useEffect(() => {
      if (remainingTime > 0 && isrunning === true) {
        setTimeout(() => {
          setRemainingTime((time) => time - 1);
        }, 1000);
      } else {
        endGame();
      }
    }, [remainingTime, isrunning]);

    return {
      isrunning,
      inputEl,
      wordsInput,
      onWordChange,
      selectEl,
      remainingTime,
      StartGame,
      wordCount,
    };
  
}
