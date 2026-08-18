import { Box } from "@mui/material";
import ChildrenSection from "./ChildrenSection";
import Card from "./Card";
import seo from "../assets/Illustration (3).png";
import ppc from "../assets/Illustration (4).png";
import social from "../assets/Illustration (5).png";
import email from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png";
import content from "../assets/tokyo-many-browser-windows-with-different-information 1.png";
import analytics from "../assets/Illustration (6).png";

export default function Services() {
  return (
    <ChildrenSection
      title="Services"
      text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: "32px" }}>
        <Card title="Search engine optimization" image={seo} cardBg="#F3F3F3" titleBg="#B9FF66" iconBg="#191A23" iconColor="#B9FF66" linkColor="#191A23" />
        <Card title="Pay-per-click advertising" image={ppc} cardBg="#B9FF66" titleBg="#FFFFFF" iconBg="#191A23" iconColor="#B9FF66" linkColor="#191A23" />
        <Card title="Social Media Marketing" image={social} cardBg="#191A23" titleBg="#FFFFFF" iconBg="#FFFFFF" iconColor="#191A23" linkColor="#FFFFFF" />
        <Card title="Email Marketing" image={email} cardBg="#F3F3F3" titleBg="#B9FF66" iconBg="#191A23" iconColor="#B9FF66" linkColor="#191A23" />
        <Card title="Content Creation" image={content} cardBg="#B9FF66" titleBg="#FFFFFF" iconBg="#191A23" iconColor="#B9FF66" linkColor="#191A23" />
        <Card title="Analytics and Tracking" image={analytics} cardBg="#191A23" titleBg="#B9FF66" iconBg="#FFFFFF" iconColor="#191A23" linkColor="#FFFFFF" />
      </Box>
    </ChildrenSection>
  );
}
