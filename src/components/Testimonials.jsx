import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ChildrenSection from "./ChildrenSection";
import Marketing from "./Marketing";

export default function Testimonials({ users }) {
  const [page, setPage] = useState(0);

  const showUser = users.filter((el) => el.description);

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(showUser.length - 1);
    }
  }

  function handleNext() {
    if (page < showUser.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  }

  return (
    <ChildrenSection
      title="Testimonials"
      text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    >
      <Box
        sx={{
          overflow: "hidden",
          padding: { xs: "32px 0", md: "56px 0" },
          borderRadius: "36px",
          backgroundColor: "#191A23",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "18px", md: "34px" },
            transition: "transform 0.4s",
            transform: {
              xs: "translateX(calc(50% - " + (page * 258 + 120) + "px))",
              md: "translateX(calc(50% - " + (page * 454 + 210) + "px))",
            },
          }}
        >
          {showUser.map((el) => (
            <Marketing key={el.id} item={el} />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "20px", md: "42px" },
            marginTop: "40px",
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: "#FFFFFF" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 4L7 12L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {showUser.map((el, i) => (
              <Box
                key={el.id}
                onClick={() => setPage(i)}
                sx={{
                  width: "9px",
                  height: "9px",
                  cursor: "pointer",
                  backgroundColor: page === i ? "#B9FF66" : "#FFFFFF",
                }}
              />
            ))}
          </Box>

          <IconButton onClick={handleNext} sx={{ color: "#FFFFFF" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </ChildrenSection>
  );
}
