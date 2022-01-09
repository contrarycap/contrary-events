let POST_URL =
  "https://discord.com/api/webhooks/923302465338769469/GjByLg9o__1A7HGLdoSwRgUbTpNHe7AN0c3XT9N73YtEqxpq19dBN2aXBIQqyWLf1T6-";

function onEdit(e) {
  let sheet = SpreadsheetApp.openById(
    "1UEAJoN5TJemAF8jjYnxOYf78H30HgUOqSEqp9xFcLKM"
  );
  let row = e.range.getRow();
  let value = sheet.getRange(1, 1).getValue();

  let message = [
    {
      name: "Date",
      value: value,
      inline: false
    },
    {
      name: "Start Time",
      value: e.range.getRow(),
      inline: false
    },
    {
      name: "End Time",
      value: e.range.getColumn(),
      inline: false
    },
    {
      name: "Event description",
      value: e.range.getColumn(),
      inline: false
    },
    {
      name: "Event Name",
      value: e.range.getColumn(),
      inline: false
    }
  ];

  let options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    payload: JSON.stringify({
      content: "‌",

      embeds: [
        {
          author: {
            name: "Contrary Events Bot",
            icon_url:
              "https://cdn.discordapp.com/attachments/696400605908041794/888874282950750238/1200px-Google_Calendar_icon_28202029.png"
          },
          title: "Contrary Event bot",
          color: 33023,
          fields: message,
          footer: {
            text: "React to approve"
          }
        }
      ]
    })
  };

  try {
    UrlFetchApp.fetch(POST_URL, options);
  } catch (error) {
    Logger.log("Problem with sending");
  }
}

// function myFunction() {
//   var spreadsheet = SpreadsheetApp.getActiveSheet();
//   var calendarId = "c_63r96q0f9clmrcb2tentcc6u3k@group.calendar.google.com";
//   var eventCal = CalendarApp.getCalendarById(calendarId);
//   var signups = spreadsheet.getRange("B2:H5").getValues();

//   for (i=0; i<signups.length; i++) {

//     var event = signups[i];
//     var startTime = new Date(event[5]);
//     var endTime = new Date(event[6]);
//     var name = event[4];
//     Logger.log(event);
//     Logger.log(startTime);
//     Logger.log(endTime);
//     eventCal.createEvent(name, startTime, endTime);

// }
//   // eventCal.createEvent()
// }
