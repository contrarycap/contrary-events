import { Stack, Typography, Box } from "@mui/material";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

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
        height={'80vh'}
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={process.env.NEXT_PUBLIC_GCAL_API}
        eventSources={[
          {
            googleCalendarId: 'c_56mm6c0unhoub1jibmg0h8tt8s@group.calendar.google.com'
          }
        ]}
        eventClick={function (arg) {

          // opens events in a popup window
          window.open(arg.event.url, '_blank', 'width=700,height=600');

          // prevents current tab from navigating
          arg.jsEvent.preventDefault();
        }}
      />
    </Stack>
  )
}