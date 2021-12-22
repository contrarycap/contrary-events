let POST_URL = process.env.WEBHOOK_URL;

function onSubmit() {
  let form = FormApp.openById("109lnkqGFyNYYZeVW66tOVTZmJX7HONwageExfl7bzkk");
  let allResponses = form.getResponses();
  let latestResponse = allResponses[allResponses.length - 1];
  let response = latestResponse.getItemResponses();
  let items = [];
  Logger.log(response[2].getItem().getTitle());

  for (let i = 0; i < response.length; i++) {
    let question = response[i].getItem().getTitle();
    var answer = response[i].getResponse();
    items.push({
      name: question,
      value: answer,
      inline: false
    });
  }

  let options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    payload: JSON.stringify({
      content: "‌",
      embeds: [
        {
          title: "Contrary Event bot",
          color: 33023,
          fields: items,
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
