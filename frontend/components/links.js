import { Box, Button, Stack, Typography } from "@mui/material";

export default function Links() {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={4} width={'100%'}>
      <Box width="100%">
        <Typography variant="h4" textAlign='center'>
          Subscribe to the Calendar
        </Typography>
        <Button sx={{ width: '100%' }}>
          Events
        </Button>
        <Button sx={{ width: '100%' }}>
          Deadlines
        </Button>
      </Box>
      <Box width="100%">
        <Typography variant="h4" textAlign='center'>
          Contribute!
        </Typography>
        <Button sx={{ width: '100%' }}>
          Submit an event
        </Button>
        <Button sx={{ width: '100%' }}>
          Submit a deadline
        </Button>
      </Box>
      <Box width="100%">
        <Typography variant="h4" textAlign='center'>
          Subscribe to {`Contrary's`} mailing list
        </Typography>
        <Button sx={{ width: '100%' }}>
          Stay in the loop!
        </Button>
      </Box>
    </Stack>
  )
}
