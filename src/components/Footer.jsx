import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import social from "../assets/Social_icons.png";

const navSx = { color: "#FFFFFF", fontSize: "14px", cursor: "pointer" };

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <Box component="footer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: { xs: "32px 24px", md: "40px 48px" },
          borderRadius: "36px 36px 0 0",
          backgroundColor: "#191A23",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Typography sx={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 700 }}>Positivus</Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: "16px", md: "30px" } }}>
            <Typography sx={navSx}>About us</Typography>
            <Typography sx={navSx}>Services</Typography>
            <Typography sx={navSx}>Use Cases</Typography>
            <Typography sx={navSx}>Pricing</Typography>
            <Typography sx={navSx}>Blog</Typography>
          </Box>

          <Box component="img" src={social} alt="social" sx={{ height: "26px", cursor: "pointer" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: "28px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Typography
              sx={{
                alignSelf: "flex-start",
                padding: "0 6px",
                borderRadius: "7px",
                backgroundColor: "#B9FF66",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Contact us:
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>Email: info@positivus.com</Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>Phone: 555-567-8901</Typography>
            <Typography sx={{ maxWidth: "270px", color: "#FFFFFF", fontSize: "14px", lineHeight: "22px" }}>
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: "16px",
              padding: { xs: "20px", md: "36px 32px" },
              borderRadius: "12px",
              backgroundColor: "#292A32",
            }}
          >
            <TextField
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: { xs: "100%", sm: "230px" },
                "& .MuiOutlinedInput-root": { borderRadius: "12px", color: "#FFFFFF", fontSize: "14px" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
              }}
            />
            <Button
              onClick={() => setEmail("")}
              sx={{
                width: { xs: "100%", sm: "auto" },
                padding: "16px 26px",
                borderRadius: "12px",
                backgroundColor: "#B9FF66",
                color: "#191A23",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "none",
                "&:hover": { backgroundColor: "#A8EE55" },
              }}
            >
              Subscribe to news
            </Button>
          </Box>
        </Box>

        <Box sx={{ height: "1px", backgroundColor: "#FFFFFF" }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: "16px" }}>
          <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
            © 2023 Positivus. All Rights Reserved.
          </Typography>
          <Typography sx={navSx}>Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
}
