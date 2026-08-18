import { Box, Typography, Button } from "@mui/material";
import ChildrenSection from "./ChildrenSection";
import picture from "../assets/Picture.png";
import picture1 from "../assets/Picture (1).png";
import picture2 from "../assets/Picture (2).png";
import picture3 from "../assets/Picture (3).png";
import picture4 from "../assets/Picture (4).png";

const pictures = [picture, picture1, picture2, picture3, picture4];

export default function Team({ users }) {
  return (
    <ChildrenSection
      title="Team"
      text="Meet the skilled and experienced team behind our successful digital marketing strategies"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: "28px",
        }}
      >
        {users.map((el, i) => (
          <Box
            key={el.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: { xs: "24px", md: "32px 28px" },
              borderRadius: "36px",
              border: "1px solid #191A23",
              boxShadow: "0px 5px 0px 0px #191A23",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
              <Box
                component="img"
                src={pictures[i % pictures.length]}
                alt={el.nameTeam}
                sx={{ flexShrink: 0, width: "80px", height: "80px", objectFit: "contain" }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>{el.nameTeam}</Typography>
                <Typography sx={{ fontSize: "14px", lineHeight: "20px" }}>{el.levelTeam}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  flexShrink: 0,
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#191A23",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#B9FF66">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.98 8H13v2.2h.07c.7-1.3 2.4-2.7 4.93-2.7 5.3 0 6.3 3.4 6.3 7.9V24h-5v-7.6c0-1.8 0-4.2-2.6-4.4-2.6 0-3 2-3 4.2V24h-5V8z" />
                </svg>
              </Box>
            </Box>

            <Box sx={{ height: "1px", margin: "20px 0", backgroundColor: "#191A23" }} />

            <Typography sx={{ fontSize: "14px", lineHeight: "22px" }}>{el.descTeam}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: { xs: "stretch", md: "flex-end" }, marginTop: "32px" }}>
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
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
          See all team
        </Button>
      </Box>
    </ChildrenSection>
  );
}
