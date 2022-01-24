import { Stack, Typography } from "@mui/material";
import MuiNextLink from '@components/core-components/MuiNextLink';

export default function About() {
  return (
    <Stack id="about" spacing={2} width={'100%'}>
      <Typography variant="h2">
        About us
      </Typography>
      <Typography variant="body1">
        Cool things about contrary
      </Typography>
      <Typography variant="h5">
        Looking to found a company?
      </Typography>
      <Typography variant="body1">
        Check out our guide for <MuiNextLink href="https://contrarycap.com/waterloo" target="_blank">"How to Start a Startup at Waterloo"</MuiNextLink>.
      </Typography>
      <Typography variant="h5">
        Other resources
      </Typography>
      <Typography variant="body1">
        some other resources
      </Typography>
    </Stack>
  )
}