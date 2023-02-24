// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabUpdate, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    onClickTabUpdate(tabId)
  }

  const isActiveTab = isActive ? 'active-tab-button' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${isActiveTab}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
