import { Stack, Typography } from "@mui/material";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Events() {
  return (
    <Stack spacing={2} width={'100%'}>
      <Typography variant="h2">
        Events
      </Typography>
      <Typography variant="body1">
        Community-sourced, Contrary-vetted entrepreneruial, tech and start-up events in the Kitchener-Waterloo region.
      </Typography>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin]}
        weekends={false}
        events={[
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]}
      />
    </Stack>
  )
}