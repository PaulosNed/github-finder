import React, { useContext } from 'react'
import { AlertContext } from '../../Context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  
    return alert !== null && (
        <div>{alert.msg}</div>
  )
}

export default Alert