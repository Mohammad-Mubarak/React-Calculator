import { useState } from "react";

import "./App.css";
import Sign from "./Sign";

function App() {
	const [valueOne, SetValueOne] = useState("NUM 1");
	const [valueTwo, SetValueTwo] = useState("NUM 2");
	const [error, Seterror] = useState("");

	const [result, SetResult] = useState(0);

	function sum(operation) {
      if(valueOne ==="NUM 1" || valueOne ===" " ){
        Seterror("Num 1 can not be empty")
		return
      }


	  if( valueTwo ==="NUM 2" ||  valueTwo ===" "){
		Seterror("Num 2 can not be empty")
        return;
	  }




		switch (operation) {
			case "-":
				var c = parseInt(valueOne) - parseInt(valueTwo);
				SetResult(c);
				Seterror("")
				break;

			case "+":
				var c = parseInt(valueOne) + parseInt(valueTwo);
				SetResult(c);
				Seterror("")
				break;

			case "/":
				var c = parseInt(valueOne) / parseInt(valueTwo);
				SetResult(c);
				Seterror("")
				break;

			case "*":
				var c = parseInt(valueOne) * parseInt(valueTwo);
				SetResult(c);
				Seterror("")
				break;
		}
	}

	return (
		<>
			<div className="parent">
				<h1>React Calculator</h1>
				<input
					type="text"
					value={valueOne}
					onChange={(e) => SetValueOne(e.target.value)}
					className="input-1"
				/>
				<input
					type="text"
					value={valueTwo}
					onChange={(e) => SetValueTwo(e.target.value)}
					className="intputTwo"
				/>
				<Sign getOperation={sum} />


 {
  error ? <p className="error" style={{color:'red'}}> {error}</p>  : null
 }

 {
  result ==0 ? null : <> <p  className="finalResult">Result : {result}</p> <p className="result" >Success : Your result is shown above !</p>  </> 
 }
			 
      
			</div>
		</>
	);
}

export default App;
