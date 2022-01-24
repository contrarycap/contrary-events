import { Box, Button, Stack, Typography } from "@mui/material";

export default function Links() {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={4} width={'100%'}>
      <Box width="100%">
        <Typography variant="h4">
          Subscribe to the Calendar
        </Typography>
        <Button>
          Events
        </Button>
        <Button>
          Deadlines
        </Button>
      </Box>
      <Box width="100%">
        <Typography variant="h4">
          Contribute!
        </Typography>
        <Button>
          Submit an event
        </Button>
        <Button>
          Submit a deadline
        </Button>
      </Box>
      <Box width="100%">
        <Typography variant="h4">
          Subscribe to {`Contrary's`} mailing list
        </Typography>
        <Button>
          Stay in the loop!
        </Button>
      </Box>
    </Stack>
  )
}
