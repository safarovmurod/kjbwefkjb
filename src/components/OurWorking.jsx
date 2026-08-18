import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ChildrenSection from "./ChildrenSection";

const accordionSx = {
  padding: 0,
  borderRadius: "36px",
  border: "1px solid #191A23",
  boxShadow: "0px 5px 0px 0px #191A23",
  backgroundColor: "#F3F3F3",
  "&:first-of-type": { borderRadius: "36px" },
  "&:last-of-type": { borderRadius: "36px" },
  "&:before": { display: "none" },
  "&.Mui-expanded": { margin: 0, backgroundColor: "#B9FF66" },
  "&.Mui-expanded .bar-vertical": { display: "none" },
};

const summarySx = {
  padding: { xs: "20px 24px", md: "32px 48px" },
  "&.Mui-expanded": { minHeight: "unset" },
  "&:hover": { backgroundColor: "transparent" },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    gap: { xs: "16px", md: "20px" },
    margin: 0,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "none" },
};

const detailsSx = {
  margin: { xs: "0 24px", md: "0 48px" },
  padding: { xs: "16px 0 24px", md: "24px 0 40px" },
  borderTop: "1px solid #191A23",
  fontSize: "16px",
  lineHeight: "24px",
};

const numberSx = { fontSize: { xs: "24px", md: "48px" }, fontWeight: 500 };
const titleSx = { fontSize: { xs: "16px", md: "24px" }, fontWeight: 500 };

function PlusIcon() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        width: { xs: "34px", md: "46px" },
        height: { xs: "34px", md: "46px" },
        borderRadius: "50%",
        border: "1px solid #191A23",
        backgroundColor: "#F3F3F3",
      }}
    >
      <Box sx={{ position: "absolute", width: "16px", height: "2px", backgroundColor: "#191A23" }} />
      <Box className="bar-vertical" sx={{ position: "absolute", width: "2px", height: "16px", backgroundColor: "#191A23" }} />
    </Box>
  );
}

export default function OurWorking() {
  return (
    <ChildrenSection title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Accordion defaultExpanded sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>01</Typography>
            <Typography sx={titleSx}>Consultation</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            During the initial consultation, we will discuss your business goals and objectives,
            target audience, and current marketing efforts. This will allow us to understand your
            needs and tailor our services to best fit your requirements.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>02</Typography>
            <Typography sx={titleSx}>Research and Strategy Development</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            We research your market, competitors, and audience, then build a clear strategy that
            shows which channels to use and what results to expect.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>03</Typography>
            <Typography sx={titleSx}>Implementation</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            Our team launches the campaigns, sets up the tracking, and puts every part of the
            strategy into work.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>04</Typography>
            <Typography sx={titleSx}>Monitoring and Optimization</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            We watch the numbers every week and adjust budgets, keywords, and creatives to keep the
            results going up.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>05</Typography>
            <Typography sx={titleSx}>Reporting and Communication</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            You get a clear monthly report with the main metrics, and we stay in touch so you always
            know what is happening.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionSx}>
          <AccordionSummary expandIcon={<PlusIcon />} sx={summarySx}>
            <Typography sx={numberSx}>06</Typography>
            <Typography sx={titleSx}>Continual Improvement</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsSx}>
            Based on the results we test new ideas and keep improving the campaigns month after month.
          </AccordionDetails>
        </Accordion>
      </Box>
    </ChildrenSection>
  );
}
