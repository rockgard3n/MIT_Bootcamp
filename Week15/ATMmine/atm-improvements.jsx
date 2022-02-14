const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState("");
    const [firstInteraction, setFirstInteraction] = React.useState(false);
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      let numTest = Number(event.target.value);
      console.log(`handleChange ${event.target.value}`);
      if(numTest < 0){return}else{
        setValidTransaction(true);
        setDeposit(Number(event.target.value));
        };
      if(atmMode == "Cash Back" && numTest > totalState){
        setValidTransaction(false);
      };
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      setValidTransaction(false);
    };
    
    const handleModeSelect = (event) => {
      setFirstInteraction(true)
      let typeCheck = event.target.value;
      console.log("HEY LIAM " + atmMode);
      setAtmMode(typeCheck);
      if (typeCheck === "Cash Back"){
        setIsDeposit(false);
      }else{
        setIsDeposit(true);
      };
    }
  
    return (
      <form onSubmit={handleSubmit} onkeydown="return event.key != 'Enter';">
        <h2 id="total">{status}</h2>
        <label>Select an action below to continue</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="cashback-selection" value="Cash Back">Cash Back</option>
          </select>
          {
        firstInteraction && <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit>
          }
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  