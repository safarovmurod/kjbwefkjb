import { Box, Typography, Link } from "@mui/material";
import ChildrenSection from "./ChildrenSection";

const textSx = { marginBottom: "16px", color: "#FFFFFF", fontSize: "16px", lineHeight: "24px" };
const linkSx = { display: "flex", alignItems: "center", gap: "12px", color: "#B9FF66", fontSize: "16px" };
const lineSx = {
  width: { xs: "100%", md: "1px" },
  height: { xs: "1px", md: "auto" },
  backgroundColor: "#797A7D",
};

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <ChildrenSection
      title="Case Studies"
      text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "32px", md: "52px" },
          padding: { xs: "24px", md: "56px 48px" },
          borderRadius: "36px",
          backgroundColor: "#191A23",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={textSx}>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase in sales.
          </Typography>
          <Link href="#" underline="none" sx={linkSx}>
            Learn more
            <Arrow />
          </Link>
        </Box>

        <Box sx={lineSx} />

        <Box sx={{ flex: 1 }}>
          <Typography sx={textSx}>
            For a B2B software company, we developed an SEO strategy that resulted in a first page
            ranking for key keywords and a 200% increase in organic traffic.
          </Typography>
          <Link href="#" underline="none" sx={linkSx}>
            Learn more
            <Arrow />
          </Link>
        </Box>

        <Box sx={lineSx} />

        <Box sx={{ flex: 1 }}>
          <Typography sx={textSx}>
            For a national retail chain, we created a social media marketing campaign that increased
            followers by 25% and generated a 20% increase in online sales.
          </Typography>
          <Link href="#" underline="none" sx={linkSx}>
            Learn more
            <Arrow />
          </Link>
        </Box>
      </Box>
    </ChildrenSection>
  );
}
