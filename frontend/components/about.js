import { Stack, Typography } from "@mui/material";
import MuiNextLink from '@components/core-components/MuiNextLink';

export default function About() {
  return (
    <Stack id="about" spacing={2} width={'100%'}>
      <Typography variant="h2">
        About us
      </Typography>
      <Typography variant="body1">
        Contrary is a different kind of venture fund. We're a little bit different than most. We combine a sophisticated software platform, a world-class talent team, and scouts to identify and invest in the world's top talent - first - and then relentlessly support them from seed to scale. Because at the root of every category-defining startup are exceptional people.
      </Typography>
      <Typography variant="body1">
        We built this tool to support the Waterloo entreprenerial eco-system and encourage students to get involved on campus.
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