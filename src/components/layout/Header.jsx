import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { StyledButton } from "../StyledButton";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton size="large" edge="start" sx={{ color: "#000000" }}>
            <MenuRoundedIcon sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <Avatar src={logo} alt="avatar" sx={{ width: 55, height: 55 }} />
          </IconButton>
        </Box>
        <Box>
          <StyledButton title="Theme" />
          <Link to="login" style={{textDecoration:"none"}}>
            <StyledButton title="Login" />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
