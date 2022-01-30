import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/router'

export default function Links() {
  const router = useRouter();

  const submitEvent = () => {
    router.push('/submit');
  }

  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={4} width={'100%'}>
      <Box width="100%">
        <Typography variant="h4" textAlign='center'>
          Subscribe to the Calendar
        </Typography>
        <Button sx={{ width: '100%' }} variant="contained" size="large">
          Events
        </Button>
      </Box>
      <Box width="100%" height="100%">
        <Typography variant="h4" textAlign='center'>
          Contribute!
        </Typography>
        <Button sx={{ width: '100%' }} variant="contained" size="large" onClick={submitEvent}>
          Submit an event
        </Button>
      </Box>
      <Box width="100%" height="100%">
        <Typography variant="h4" textAlign='center'>
          Subscribe to {`Contrary's`} mailing list
        </Typography>
        <Button sx={{ width: '100%' }} variant="contained" size="large">
          Stay in the loop!
        </Button>
      </Box>
    </Stack>
  )
}
