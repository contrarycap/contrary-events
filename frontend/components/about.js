import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={2} width={'100%'}>
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
        Cool things about founding a company
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