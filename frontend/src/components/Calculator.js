import { useState } from "react";
import Parameter from "./Parameter";
import classes from "./Calculator.module.css";

const Calculator = () => {
  const [sliderVal, setSliderVal] = useState({
    purchasePrice: 0,
    downPayment: 0,
    repaymentTime: 0,
    interestRate: 0,
    loanAmount: 0,
    estimated: 0,
  });
  const inputHandler = (event) => {
    if (
      !!sliderVal.purchasePrice &&
      !!sliderVal.downPayment &&
      !!sliderVal.repaymentTime &&
      !!sliderVal.interestRate
    ) {
      setMonthlyPayment(
        monthlyPaymentResult(
          loan,
          sliderVal.repaymentTime * 12,
          sliderVal.interestRate / 12 / 100
        )
      );
    }
    setSliderVal({
      ...sliderVal,
      [event.target.name]: Number(event.target.value),
    });

    setLoan(sliderVal.purchasePrice - sliderVal.downPayment);
  };

  const [loan, setLoan] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function monthlyPaymentResult(p, n, i) {
    return Math.floor((p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
  }
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Mortgage Calculator</h1>

        <div className={classes.calculator}>
          <Parameter
            name={"purchasePrice"}
            inputHandler={inputHandler}
            symbol={"$"}
            value={sliderVal.purchasePrice}
            title={"Purchase price:"}
          />
          <Parameter
            name={"downPayment"}
            inputHandler={inputHandler}
            symbol={"$"}
            value={sliderVal.downPayment}
            title={"Down payment:"}
          />
          <Parameter
            name={"repaymentTime"}
            inputHandler={inputHandler}
            symbol={"years"}
            value={sliderVal.repaymentTime}
            title={"Repayment time:"}
            max={30}
          />
          <Parameter
            name={"interestRate"}
            inputHandler={inputHandler}
            symbol={"%"}
            value={sliderVal.interestRate}
            title={"Interest rate:"}
            max={100}
          />
          <div className={classes.results}>
            <p className={classes.p}>Loan Amount</p>
            <span className={classes.span}>${loan.toLocaleString() || 0}</span>
          </div>

          <div className={classes.results}>
            <p className={classes.p}>Estimated per / month</p>
            <span className={classes.span}>
              ${monthlyPayment.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
