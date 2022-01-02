import Box from "@mui/material/Box";
import Image from "next/image";
import styles from '@styles/Home.module.css';
import Typography from '@mui/material/Typography';
import MuiNextLink from '@components/MuiNextLink';
import { Language, Twitter } from "@mui/icons-material";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
  <Box component="footer" alignItems="center" className={styles.footer} sx={{ py: 5, px: 4 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <MuiNextLink
          sx={{ textDecoration: "none" }}
          href="https://contrarycap.com/waterloo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Language fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none" }}
          href="https://twitter.com/contrarycap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>
        <Typography >
          Contrary Capital © {new Date().getFullYear()}
        </Typography>
      </Stack>
  </Box>);
};

export default Footer;
