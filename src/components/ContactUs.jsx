import { useState } from "react";
import { Box, Typography, Button, TextField, Radio } from "@mui/material";
import ChildrenSection from "./ChildrenSection";

const inputSx = {
  "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "#FFFFFF", fontSize: "14px" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#191A23" },
};

const labelSx = { marginBottom: "6px", fontSize: "14px" };

const radioSx = { padding: 0, color: "#191A23", "&.Mui-checked": { color: "#B9FF66" } };

export default function ContactUs() {
  const [type, setType] = useState("hi");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState("");

  function handleSubmit() {
    if (email.trim() === "" || message.trim() === "") {
      setDone("Email and message are required");
      return;
    }

    setDone("Thank you, we will contact you soon");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <ChildrenSection title="Contact Us" text="Connect with Us: Let's Discuss Your Digital Marketing Needs">
      <Box sx={{ padding: { xs: "32px 20px", md: "56px 80px" }, borderRadius: "36px", backgroundColor: "#F3F3F3" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "440px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Radio checked={type === "hi"} onChange={() => setType("hi")} sx={radioSx} />
              <Typography sx={{ fontSize: "14px" }}>Say Hi</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Radio checked={type === "quote"} onChange={() => setType("quote")} sx={radioSx} />
              <Typography sx={{ fontSize: "14px" }}>Get a Quote</Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={labelSx}>Name</Typography>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              sx={inputSx}
            />
          </Box>

          <Box>
            <Typography sx={labelSx}>Email*</Typography>
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              sx={inputSx}
            />
          </Box>

          <Box>
            <Typography sx={labelSx}>Message*</Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              sx={inputSx}
            />
          </Box>

          <Button
            onClick={handleSubmit}
            fullWidth
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
            Send Message
          </Button>

          {done !== "" && <Typography sx={{ fontSize: "14px" }}>{done}</Typography>}
        </Box>
      </Box>
    </ChildrenSection>
  );
}
