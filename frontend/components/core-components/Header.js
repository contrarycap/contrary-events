import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Navbar from '@components/core-components/Navbar'
import SideDrawer from "@components/core-components/SideDrawer";
import HideOnScroll from "@components/core-components/HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/core-components/BackToTop";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/#about' },
  { title: 'FAQ', path: '/#faq' },
  { title: 'submit', path: '/submit' },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="white" elevation={0} enableColorOnDark>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `flex-start`, alignItems: 'center' }}
            >
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
