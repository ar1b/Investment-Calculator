import React from 'react'
import { formatter } from '../util/investment'

const ResultsTable = ({annualData, initialInvestment}) => {
  return (
    <table id='result'>
      <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map( dataPoint => {
            return (
                <tr key={dataPoint.year}>
                    <td>{dataPoint.year}</td>
                    <td>{formatter.format(dataPoint.valueEndOfYear)}</td>
                    <td>{formatter.format(dataPoint.interest)}</td>
                    <td>{formatter.format(dataPoint.valueEndOfYear - (initialInvestment+dataPoint.annualInvestment))}</td>
                    <td>{formatter.format(initialInvestment + (dataPoint.annualInvestment*dataPoint.year))}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default ResultsTable
