import { useState } from "react";
import { Box, Button, Typography, IconButton, Drawer } from "@mui/material";
import logo from "../assets/Frame 9.png";
import img from "../assets/Illustration.png";
import logo1 from "../assets/Company logo.png";
import logo2 from "../assets/Company logo (1).png";
import logo3 from "../assets/Company logo (2).png";
import logo4 from "../assets/Company logo (3).png";
import logo5 from "../assets/Company logo (4).png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box component="header" sx={{ paddingTop: { xs: "16px", md: "24px" }, paddingBottom: { xs: "50px", md: "110px" } }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box component="img" src={logo} alt="Positivus" sx={{ width: { xs: "120px", md: "170px" } }} />

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "30px" }}>
          <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>About us</Typography>
          <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>Services</Typography>
          <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>Use Cases</Typography>
          <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>Pricing</Typography>
          <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>Blog</Typography>
          <Button
            sx={{
              padding: "14px 26px",
              borderRadius: "12px",
              border: "1px solid #191A23",
              color: "#191A23",
              fontSize: "16px",
              fontWeight: 400,
              textTransform: "none",
              "&:hover": { backgroundColor: "#F3F3F3" },
            }}
          >
            Request a quote
          </Button>
        </Box>

        <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: "flex", md: "none" } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", width: "24px" }}>
            <Box sx={{ height: "2px", backgroundColor: "#191A23" }} />
            <Box sx={{ height: "2px", backgroundColor: "#191A23" }} />
            <Box sx={{ height: "2px", backgroundColor: "#191A23" }} />
          </Box>
        </IconButton>
      </Box>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "240px", padding: "32px 24px" }}>
          <Typography onClick={() => setOpen(false)} sx={{ fontSize: "18px", cursor: "pointer" }}>About us</Typography>
          <Typography onClick={() => setOpen(false)} sx={{ fontSize: "18px", cursor: "pointer" }}>Services</Typography>
          <Typography onClick={() => setOpen(false)} sx={{ fontSize: "18px", cursor: "pointer" }}>Use Cases</Typography>
          <Typography onClick={() => setOpen(false)} sx={{ fontSize: "18px", cursor: "pointer" }}>Pricing</Typography>
          <Typography onClick={() => setOpen(false)} sx={{ fontSize: "18px", cursor: "pointer" }}>Blog</Typography>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "1px solid #191A23",
              color: "#191A23",
              fontSize: "16px",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Request a quote
          </Button>
        </Box>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          marginTop: { xs: "40px", md: "60px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px", width: { xs: "100%", md: "52%" } }}>
          <Typography
            component="h1"
            sx={{ fontSize: { xs: "32px", md: "48px" }, lineHeight: { xs: "40px", md: "58px" }, fontWeight: 500 }}
          >
            Navigating the digital landscape for success
          </Typography>

          <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, lineHeight: "24px" }}>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </Typography>

          <Button
            sx={{
              alignSelf: { xs: "stretch", md: "flex-start" },
              padding: "16px 28px",
              borderRadius: "12px",
              backgroundColor: "#191A23",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 400,
              textTransform: "none",
              "&:hover": { backgroundColor: "#292A32" },
            }}
          >
            Book a consultation
          </Button>
        </Box>

        <Box
          component="img"
          src={img}
          alt="illustration"
          sx={{ width: { xs: "80%", md: "40%" }, height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          marginTop: { xs: "40px", md: "56px" },
        }}
      >
        <Box component="img" src={logo1} alt="logo" sx={{ height: { xs: "24px", md: "36px" } }} />
        <Box component="img" src={logo2} alt="logo" sx={{ height: { xs: "24px", md: "36px" } }} />
        <Box component="img" src={logo3} alt="logo" sx={{ height: { xs: "24px", md: "36px" } }} />
        <Box component="img" src={logo4} alt="logo" sx={{ height: { xs: "24px", md: "36px" } }} />
        <Box component="img" src={logo5} alt="logo" sx={{ height: { xs: "24px", md: "36px" } }} />
      </Box>
    </Box>
  );
}
