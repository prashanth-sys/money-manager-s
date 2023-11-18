// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {listDetails} = props
  const {income} = listDetails
  return (
    <li>
      <div>
        <div className="amount-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="shiva paravathi"
              className="image"
            />
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <p>{income}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
