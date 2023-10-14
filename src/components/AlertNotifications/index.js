// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="icon success" />
      <div className="notification-container">
        <h1 className="notification-heading success">Success</h1>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="notification-container">
        <h1 className="notification-heading error">Error</h1>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="icon warning" />
      <div className="notification-container">
        <h1 className="notification-heading warning">Warning</h1>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="icon info" />
      <div className="notification-container">
        <h1 className="notification-heading info">Info</h1>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notifications-app-container">
      <div className="alert-notifications-container">
        <h1 className="alert-notifications-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
