import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/onClickOutside';
import BurgerButton from '../BurgerButton/BurgerButton';
import { MenuContext } from '../../context/navState';
import { SideMenu } from '../SideMenu/SideMenu';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import Auth from '../Authorization/Authorization';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #082bff none repeat scroll 0% 0%;
  color: #0B0000;
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const MainMenu = () => {
  const [modalLog, setModalLog] = React.useState(false)

  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <Navbar>
        <BurgerButton />
        <h1>Все мужчины</h1>
        <div>
          <MyButton style={{ marginTop: 30 }} onClick={() => setModalLog(true)}>
            Войти
          </MyButton>
          <MyModal visible={modalLog} setVisible={setModalLog}>
            {modalLog && <Auth />}
          </MyModal>
        </div>
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;