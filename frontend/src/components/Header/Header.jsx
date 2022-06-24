import { useSelector, useDispatch } from "react-redux";
import { logoutFetch } from "../../redux/thunk/asyncUser";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyModal from '../UI/MyModal/MyModal';
import Auth from '../Authorization/Authorization';
import AuthButton from '../UI/AuthButton/AuthButton';
import SideBar from '../SideBar/SideBar';
import BasketIcon from "../BasketIcon/BasketIcon";
import './Header.css'
import { useNavigate } from "react-router-dom";

const drawerWidth = 140;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalLog, setModalLog] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function homeLink () {
    navigate('/')
  }

  return (


    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(0, 0, 0)', zIndex: '20' }}>

        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="allmanHome" onClick={homeLink} variant="h6" noWrap component="div">
            ALLMAN
          </Typography>
<div className="basketAndExit">
          {user.length > 0 ? (
            <div> 
             <img 
             src="/img/Vector.png" alt="x"
             className="authIcon"
             sx={{ marginTop: 30 }} 
             onClick={() => dispatch(logoutFetch())}
              />
            </div>
          ) : (
            <div>
              <img 
              src="/img/login.png" alt="x" 
              className="authIcon"
              sx={{ marginTop: 30 }}
              onClick={() => setModalLog(true)}
              />
            </div>

          )}

          <MyModal visible={modalLog} setVisible={setModalLog}>
            {modalLog && <Auth />}
          </MyModal>
          <BasketIcon />
          </div>
        </Toolbar>
      </AppBar>
      <SideBar setOpen={setOpen} isOpen={open} />
      <Main open={open} >
        <DrawerHeader />
      </Main>
    </Box>
  );
}
