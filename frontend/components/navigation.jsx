import Link from 'next/link';
import { styled as muiStyled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router'

export default function Navigation() {
  const { push } = useRouter();

  const handleHomeClicked = () => {
    push('/');
  };

  const handleAboutClicked = () => {
    push('/#about');
  };

  const handleFAQClicked = () => {
    push('/#faq');
  };

  const handleSubmitClicked = () => {
    push('/submit');
  };

  return (
    <nav>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent={'flex-start'}
        width={"100%"}
        alignItems="center"
        height={'50px'}
       >
        <Button onClick={handleHomeClicked} passHref>
          Home
        </Button>
        <Button onClick={handleAboutClicked} passHref>
          About
        </Button>
        <Button onClick={handleFAQClicked} passHref>
          FAQ
        </Button>
        <Button onClick={handleSubmitClicked} passHref>
          Submit an event
        </Button>
      </Stack>
    </nav>
  )
}

const CustomButton = muiStyled(Button)(({ theme }) => ({
  height: '45px',
  fontSize: '1.2rem',
  fontFamily: [
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
}));

