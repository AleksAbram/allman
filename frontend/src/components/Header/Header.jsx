import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MyModal from "../UI/MyModal/MyModal";
import Auth from "../Authorization/Authorization";
import MenuPopupState from "../DropDown/DropDown";
import AuthButton from "../UI/AuthButton/AuthButton";
import { useSelector, useDispatch } from "react-redux";
import { logoutFetch } from "../../redux/thunk/asyncUser";

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

export default function PersistentDrawerLeft() {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.user);
  console.log(user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalLog, setModalLog] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const arrCategories = [
    {
      title: "Одежда",
      links: [
        { text: "Костюмы", id: "clothes" },
        { text: "Рубашки и сорочки", id: "clothes" },
        { text: "Тренчи", id: "clothes" },
        { text: "Пиджаки", id: "clothes" },
        { text: "Брюки", id: "clothes" },
      ],
    },
    {
      title: "Обувь",
      links: [
        { text: "Дерби", id: "shoes" },
        { text: "Оксворды", id: "shoes" },
        { text: "Лоферы", id: "shoes" },
        { text: "Кеды", id: "shoes" },
      ],
    },
    {
      title: "Аксессуары",
      links: [
        { text: "Ремни", id: "accessories" },
        { text: "Галстуки", id: "accessories" },
        { text: "Бабочки", id: "accessories" },
      ],
    },
    { title: "О нас", links: [{ text: "Кто мы ? Что мы ?", id: "about" }] },
    {
      title: "Сертификаты",
      links: [{ text: "День рождения", id: "certificates" }],
    },
  ];
  // console.log(user);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#010101" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ALLMAN
          </Typography>
          {user.length > 0  ? (
            <AuthButton sx={{ marginTop: 30 }} onClick={() => dispatch(logoutFetch())}>
              Выйти
            </AuthButton>
          ) : (
            <AuthButton
              sx={{ marginTop: 30 }}
              onClick={() => setModalLog(true)}
            >
              Войти
            </AuthButton>
          )}

          <MyModal visible={modalLog} setVisible={setModalLog}>
            {modalLog && <Auth />}
          </MyModal>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {arrCategories.map((el) => {
            return <MenuPopupState children={el.links} title={el.title} />;
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
