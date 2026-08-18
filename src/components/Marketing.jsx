import { Box, Typography } from "@mui/material";

export default function Marketing({ item }) {
  return (
    <Box sx={{ flexShrink: 0, width: { xs: "240px", md: "420px" } }}>
      <Box
        sx={{
          position: "relative",
          padding: { xs: "18px", md: "30px 34px" },
          borderRadius: "30px",
          border: "1px solid #B9FF66",
        }}
      >
        <Typography sx={{ color: "#FFFFFF", fontSize: { xs: "12px", md: "14px" }, lineHeight: "21px" }}>
          {item.description}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "42px",
            bottom: "-14px",
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: "14px solid #B9FF66",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "43px",
            bottom: "-12px",
            width: 0,
            height: 0,
            borderLeft: "13px solid transparent",
            borderRight: "13px solid transparent",
            borderTop: "13px solid #191A23",
          }}
        />
      </Box>

      <Box sx={{ marginTop: "26px", paddingLeft: "52px" }}>
        <Typography sx={{ color: "#B9FF66", fontSize: "14px", fontWeight: 700 }}>{item.name}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontSize: "13px" }}>{item.Marketing}</Typography>
      </Box>
    </Box>
  );
}
