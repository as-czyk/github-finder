import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertcontext = useContext(AlertContext);

  const { alert } = alertcontext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
