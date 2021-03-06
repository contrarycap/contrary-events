import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const faq = [
    {
      preview: "Why did we build this?",
      detail: "asfd"
    },
    {
      preview: "How do I contribute?",
      detail: "asdf"
    },
    {
      preview: "What is Contrary?",
      detail: "Backed by founders from Airbnb, Tesla, Facebook, and many others, Contrary is a venture fund that uses technology to identify and invest in the world's top talent - first - and then relentlessly support them as they scale."
    },
  ];


  return (
    <Stack id="faq" spacing={2} width={'100%'}>
      <Typography variant="h2">
        FAQ
      </Typography>
      <Stack>
        {faq.map((res, idx) => {
          return (
            <Accordion key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="body1">
                  {res.preview}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  {res.detail}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Stack>
    </Stack>
  )
}