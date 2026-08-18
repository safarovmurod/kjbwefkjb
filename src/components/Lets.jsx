import { Box, Typography, Button } from "@mui/material";
import img from "../assets/img.png";

export default function Lets() {
  return (
    <Box component="section">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "32px",
          padding: { xs: "24px", md: "48px" },
          borderRadius: "36px",
          backgroundColor: "#F3F3F3",
        }}
      >
        <Box sx={{ maxWidth: "420px" }}>
          <Typography component="h2" sx={{ marginBottom: "20px", fontSize: "24px", lineHeight: "31px", fontWeight: 500 }}>
            Let’s make things happen
          </Typography>

          <Typography sx={{ marginBottom: "20px", fontSize: "16px", lineHeight: "24px" }}>
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </Typography>

          <Button
            sx={{
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
            Get your free proposal
          </Button>
        </Box>

        <Box component="img" src={img} alt="illustration" sx={{ width: "100%", maxWidth: "290px", height: "auto" }} />
      </Box>
    </Box>
  );
}
