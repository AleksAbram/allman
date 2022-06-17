import React from 'react';
import style from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible}) => {

  const rootClasses = [style.myModal]
  if(visible) {
    rootClasses.push(style.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      {/* stopPropagation предотвращает закрытие модального окна при нажатии на нужную нам часть контента */}
      <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;