import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [maxNumber, setMaxNumber] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [theme, setTheme] = useState("container theme1")
  const [toggleTheme, setToggleTheme] = useState("toggle t-one")
  const [screenTheme, setScreenTheme] = useState("screen s-one")
  const [boxButtons, setBoxButtons] = useState("boxButtons b-one")
  const [buttons, setButtons] = useState("buttons btn-one")


  const handleClick = (e) => {
    let newValue = e.target.value;
   

    if (result.length <= 8) {
      setResult(result + newValue);
      setMaxNumber(false);
    } else if (result.length >= 9 && result.length <= 15) {
      setResult(result + newValue);
      setMaxNumber(true);
    }
  };

  const handleReset = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  const handleToggle = () => {
    if (toggle === 0){
      setToggle(toggle + 1)
      setTheme("container theme2")
      setToggleTheme("toggle t-two")
      setScreenTheme("screen s-two")
      setBoxButtons("boxButtons b-two")
      setButtons("buttons btn-two")
    }else if(toggle === 1) {
      setToggle(toggle + 1)
      setTheme("container theme3")
      setToggleTheme("toggle t-three")
      setScreenTheme("screen s-three")
      setBoxButtons("boxButtons b-three")
      setButtons("buttons btn-three")
    }else if (toggle === 2){
      setToggle(0)
      setTheme("container theme1")
      setToggleTheme("toggle t-one")
      setScreenTheme("screen s-one")
      setBoxButtons("boxButtons b-one")
      setButtons("buttons btn-one")
       
    }
  };
   

  return (
    <>
      <div className={theme}>
        <div className="box">
          <div className="header">
            <h1>calc</h1>
            <div className="box-toggle">
              <h4>THEME</h4>
              <div onClick={handleToggle} className={toggleTheme}>
                <p>1 2 3</p>
                {toggle === 0 && <div className="circle"/>  }
                {toggle === 1 && <div className="circle1"/>  }
                {toggle === 2 && <div className="circle2"/>  }
              </div>
            </div>
          </div>
          <div >
           {/*  <h1 className={maxNumber ? "result" : "newResult"}>
              {" "}
              {result === "" ? 0 : result}
            </h1> */}
            <input className={screenTheme} type="text" disabled value={result === "" ? 0 : result} />
          </div>
          <div className={boxButtons}>
            <button  className={buttons} value="7" onClick={handleClick}>
              7
            </button>
            <button  className={buttons}  value="8" onClick={handleClick}>
              8
            </button>
            <button  className={buttons} value="9" onClick={handleClick}>
              9
            </button>
            <button  className={buttons}  id="delete" value="delete" onClick={handleDelete}>
              DEL
            </button>
            <button  className={buttons} value="4" onClick={handleClick}>
              4
            </button>
            <button  className={buttons} value="5" onClick={handleClick}>
              5
            </button>
            <button  className={buttons} value="6" onClick={handleClick}>
              6
            </button>
            <button  className={buttons} value="+" onClick={handleClick}>
              +
            </button>
            <button  className={buttons} value="1" onClick={handleClick}>
              1
            </button>
            <button  className={buttons} value="2" onClick={handleClick}>
              2
            </button>
            <button  className={buttons} value="3" onClick={handleClick}>
              3
            </button>
            <button  className={buttons} value="-" onClick={handleClick}>
              -
            </button>
            <button  className={buttons} value="." onClick={handleClick}>
              .
            </button>
            <button  className={buttons} value="0" onClick={handleClick}>
              0
            </button>
            <button  className={buttons} value="/" onClick={handleClick}>
              /
            </button>
            <button  className={buttons} value="*" onClick={handleClick}>
              x
            </button>
            <button  className={buttons}  id="reset" value="reset" onClick={handleReset}>
              RESET
            </button>
            <button  className={buttons} id="equal" value="=" onClick={handleResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
