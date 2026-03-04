const InvestmentForm = ({investmentInformation, inputHandler}) => {

  return (
    <div id="user-input">

      <div className='input-group'>
        <div>
          <p><label>Initial Investment</label></p>
          <input 
            type='number' 
            value={investmentInformation.initialInvestment} 
            onChange={(event) => inputHandler('initialInvestment', event.target.value)}
          /> 
        </div>
        <div>
          <p><label>Annual Investment</label></p>
          <input 
            type='number'
            value={investmentInformation.annualInvestment} 
            onChange={(event) => inputHandler('annualInvestment', event.target.value)}
          />
        </div>
      </div>

      <div className='input-group'>
        <div>
          <p><label>Expected Return</label></p>
          <input 
            type='number'
            value={investmentInformation.expectedReturn}
            onChange={(event) => inputHandler('expectedReturn', event.target.value)}
          />
        </div>
        <div>
          <p><label>Duration</label></p>
          <input
            type='number'
            value={investmentInformation.duration}
            onChange={(event) => inputHandler('duration', event.target.value)}
          /> 
        </div>
      </div>
    </div>
  )
}

export default InvestmentForm
