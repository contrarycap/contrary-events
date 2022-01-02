import { Container, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{py: 5}}>
      <Stack spacing={2}>
      <Typography variant="h1">Submit an Event</Typography>
      <Typography variant="body1">Submit events yay</Typography>
      </Stack>
    </Container>
  )
};

export default About;