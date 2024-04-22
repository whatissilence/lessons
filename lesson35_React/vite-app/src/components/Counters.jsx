export default function Counters({plusCounter, minusCounter, setState}) {

  const handleReset = () => {
    setState((prev) => ({
      ...prev,
      plusCount: 0,
      minusCount: 0
    }));
  }

  function handleReset3() {

    const callBack = (previousState) => {
      const newState = {
        ...previousState,
        plusCount: 0,
        minusCount: 0
      };

      return newState;
    }

    setState(callBack);
  }

  return <>
    <div>plusCounter: {plusCounter}</div>
    <div>minusCounter: {minusCounter}</div>
    <button onClick={handleReset}>ResetCounters</button>
    <button onClick={handleReset3}>ResetCounters again</button>
  </>;
}