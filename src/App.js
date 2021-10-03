import "./App.css";
import React  from "react";
import UseSpeedType from './useSpeedType/useSpeedType'

function App() {

  const {
    isrunning,
    inputEl,
    wordsInput,
    onWordChange,
    selectEl,
    remainingTime,
    StartGame,
    wordCount
  } =  UseSpeedType()
 

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
     <div className='Apps'>
     <textarea
        disabled={!isrunning}
        className="typing-Space"
        ref={inputEl}
        value={wordsInput}
        placeholder='type in your words here...'
        name="wordsInput"
        onChange={onWordChange}
      />

      <select className='options' ref={selectEl} disabled={isrunning} className="duration--Options">
        <option value={remainingTime}>
          {remainingTime > 0 ? remainingTime : "pick a countdown"}{" "}
        </option>
        <option value={5}>5 Seconds </option>
        <option value={10}>10 Seconds </option>
        <option value={15}>15 Seconds </option>
        <option value={20}>20 Seconds </option>
        <option value={25}>25 Seconds </option>
        <option value={30}>30 Seconds </option>
        <option value={35}>35 Seconds </option>
        <option value={40}>40 Seconds </option>
        <option value={45}>45 Seconds </option>
        <option value={50}>50 Seconds </option>
        <option value={55}>55 Seconds </option>
        <option value={60}>60 Seconds </option>
      </select>
      <h3 className="timeRemaining">
        {" "}
        {remainingTime > 0
          ? `your time is remaining ${remainingTime} seconds`
          : ""}
      </h3>
      <button className="btn"
       disabled={isrunning} 
       onClick={StartGame}>
        Start
      </button>
      <h2 className="word--count">You typed {wordCount} words!</h2>
     </div>
    </div>
  );
}

export default App;
