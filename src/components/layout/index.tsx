import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import Sidebar from "./sidebar";
const Layout = () => {
  return (
    <Grid container height="100%">
      <Grid item sx={{ width: "15%", backgroundColor: "#F1F1F2", pt: "64px" }}>
        <Sidebar />
      </Grid>
      <Grid item width="85%">
        <AppBar
          position="static"
          sx={{ backgroundColor: "#DADCDD", color: "#000", boxShadow: "none" }}
        >
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
      </Grid>
    </Grid>
  );
};

export default Layout;
