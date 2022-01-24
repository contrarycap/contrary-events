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
      detail: "asdf"
    },
  ];


  return (
    <Stack spacing={2} width={'100%'}>
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