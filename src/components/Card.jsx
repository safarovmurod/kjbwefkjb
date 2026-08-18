import { Box, Typography, Link } from "@mui/material";

export default function Card({ title, image, cardBg, titleBg, iconBg, iconColor, linkColor }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minHeight: { xs: "auto", md: "248px" },
        padding: { xs: "24px", md: "40px" },
        borderRadius: "36px",
        border: "1px solid #191A23",
        boxShadow: "0px 5px 0px 0px #191A23",
        backgroundColor: cardBg,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "28px",
          minHeight: { xs: "auto", md: "168px" },
        }}
      >
        <Typography
          component="h3"
          sx={{ maxWidth: "210px", fontSize: "24px", lineHeight: "31px", fontWeight: 500 }}
        >
          <Box
            component="span"
            sx={{
              padding: "0 6px",
              borderRadius: "7px",
              color: "#191A23",
              backgroundColor: titleBg,
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
            }}
          >
            {title}
          </Box>
        </Typography>

        <Link href="#" underline="none" sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              width: "33px",
              height: "33px",
              borderRadius: "50%",
              backgroundColor: iconBg,
              color: iconColor,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H5M13 3V11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, color: linkColor }}>
            Learn more
          </Typography>
        </Link>
      </Box>

      {image ? (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ display: { xs: "none", md: "block" }, flexShrink: 0, width: "168px", height: "136px", objectFit: "contain" }}
        />
      ) : (
        <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0, width: "168px", height: "136px" }} />
      )}
    </Box>
  );
}
