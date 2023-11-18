// Write your code here
import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import './index.css'

class MoneyManager extends Component {
  state = {transactionList: []}

  render() {
    const {transactionList} = this.state

    return (
      <div className="bg-container">
        <div className="name-card-container">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="span-description">Money Manager</span>
          </p>
          <ul>
            {transactionList.map(eachList => (
              <MoneyDetails key={eachList.id} listDetails={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
