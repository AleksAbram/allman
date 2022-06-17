import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

export default function Header() {
  const [modalLog, setModalLog] = React.useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Все Мужчины
          </Typography>
          <MyButton style={{ marginTop: 30 }} onClick={() => setModalLog(true)}>
            Войти
          </MyButton>
          <MyModal visible={modalLog} setVisible={setModalLog}>
            {modalLog && <Login />}
          </MyModal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
