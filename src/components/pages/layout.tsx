import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Layout = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Box sx={{ width: "15%", height: "100%", backgroundColor: "red" }}></Box>
      <Box sx={{ width: "85%" }}>
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
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: "20px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
