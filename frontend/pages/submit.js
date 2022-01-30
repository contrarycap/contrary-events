import { Container, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Stack spacing={2}>
        <Typography variant='h1'>Submit an Event</Typography>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLScPapG5kfrIx0LdPh-MYN4rQFDlVMR2gN6h220d5Hd7cxPZiA/viewform?embedded=true'
          width='100%'
          height='700px'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        >
          Loading…
        </iframe>{' '}
      </Stack>
    </Container>
  );
};

export default About;
