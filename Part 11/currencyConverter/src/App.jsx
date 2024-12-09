import React from 'react'
import { InputBox } from './components'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <div>
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            convert()
            }}>
            <div>
              <InputBox 
              label = "From" 
              amount = {amount}
              onAmountChange = {newAmount => setAmount(newAmount)}
              currencyOptions = {options}
              onCurrencyChange = {newCurrency => setAmount(amount)}
              selectCurrency = {from}
              />
            </div>
            <div>
              <button onClick={swap}>Swap</button>
            </div>
            <div>
              <InputBox 
              label="To"
              amount = {convertedAmount}
              currencyOptions = {options}
              onCurrencyChange = {newCurrency => setAmount(amount)}
              selectCurrency = {to}
              amountDisable
              />   
            </div>
            <button>Convert {from.toUpperCase()} to {to.toUpperCase}</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default App
