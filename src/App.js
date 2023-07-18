import { useEffect, useState } from "react";

export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);
  console.log(setadvice);
  console.log(advice);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    setadvice(advice.slip.advice);
    setcount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Msg count={count} />
    </div>
  );
}
function Msg(props) {
  return (
    <p>
      You have read <b>{props.count}</b> of advices
    </p>
  );
}
