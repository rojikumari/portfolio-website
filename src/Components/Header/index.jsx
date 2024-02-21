import styles from "./header.module.scss";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Skills", path: "#skills" },
  { label: "Contact", path: "#contact" },
];

function MobNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, color: "#acacad" }}
        fontSize={18}
        fontWeight={800}
      >
        R-Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <motion.a
                    href={item.path}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.link}
                  >
                    {item.label}
                  </motion.a>
                }
                sx={{
                  color: "#f7f7fc",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundImage: "linear-gradient(to right, #4f0629, #a995aa)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontSize={24}
            fontWeight={800}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "#acacad" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              animation: `${bounceAnimation} 1s ease infinite`,
            }}
          >
            R-Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#f7f7fc",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  // transition: "color 0.3s ease-in-out", // Adding a transition for color change
                  "&:hover": {
                    scale: "1.1",
                  },
                }}
              >
                <motion.a
                  href={item.path}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.link}
                >
                  {item.label}
                </motion.a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundImage: "linear-gradient(to right, #4f0629, #a995aa)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

MobNavbar.propTypes = {
  window: PropTypes.func,
};

export default MobNavbar;
