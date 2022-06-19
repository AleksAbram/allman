import React from 'react';
import classes from './ButtonBar.module.css';

const  ButtonBar = ({children, ...props}) => {
  return (
    <button {...props} className={classes.btnBar}>
      {children}
    </button>
  );
};

export default ButtonBar;