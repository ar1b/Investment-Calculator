import React, {useState} from "react"
import Header from "./components/Header"
import InvestmentForm from "./components/InvestmentForm"
import ResultsTable from "./components/ResultsTable"
import { calculateInvestmentResults, formatter } from "./util/investment"

function App() {

  const [investmentInformation, setInvestmentInformation] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const handleInputChange = (inputIdentifier, newValue) => {
    setInvestmentInformation(prevInvestInfo => {
      const updatedInvestmentInformation = {
        ...prevInvestInfo,
        [inputIdentifier]: +newValue
      }
      console.log(updatedInvestmentInformation)
      return updatedInvestmentInformation
    })
  }

  const resultsData = calculateInvestmentResults(investmentInformation)

  return (
    <>
      <Header />
      <InvestmentForm investmentInformation={investmentInformation} inputHandler={handleInputChange}/>
      <ResultsTable annualData={resultsData} initialInvestment={investmentInformation.initialInvestment}/>
    </>
  )
}

export default App
