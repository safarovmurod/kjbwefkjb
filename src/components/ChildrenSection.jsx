import { Box, Typography } from "@mui/material";

export default function ChildrenSection({ title, text, children }) {
  return (
    <Box component="section">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          gap: { xs: "20px", md: "32px" },
          marginBottom: { xs: "32px", md: "64px" },
        }}
      >
        <Typography
          component="h2"
          sx={{
            alignSelf: "flex-start",
            flexShrink: 0,
            padding: "0 7px",
            borderRadius: "7px",
            backgroundColor: "#B9FF66",
            fontSize: { xs: "28px", md: "32px" },
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ maxWidth: "460px", fontSize: { xs: "14px", md: "16px" }, lineHeight: "24px" }}>
          {text}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}
