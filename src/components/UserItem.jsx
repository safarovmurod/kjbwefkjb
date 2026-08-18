import { Box, Typography, Button } from "@mui/material";

export default function UserItem({ item, onDelete, onEdit }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px",
        borderRadius: "28px",
        border: "1px solid #191A23",
        boxShadow: "0px 5px 0px 0px #191A23",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box
          component="img"
          src={item.img}
          alt={item.nameTeam}
          sx={{
            flexShrink: 0,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #B9FF66",
            backgroundColor: "#B9FF66",
          }}
        />
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>{item.nameTeam}</Typography>
          <Typography sx={{ fontSize: "14px" }}>{item.levelTeam}</Typography>
        </Box>
      </Box>

      <Typography sx={{ fontSize: "14px", lineHeight: "22px" }}>{item.descTeam}</Typography>

      <Box sx={{ display: "flex", gap: "10px", marginTop: "auto" }}>
        <Button
          onClick={() => onEdit(item)}
          sx={{
            padding: "8px 20px",
            borderRadius: "10px",
            border: "1px solid #191A23",
            color: "#191A23",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(item.id)}
          sx={{
            padding: "8px 20px",
            borderRadius: "10px",
            backgroundColor: "#191A23",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": { backgroundColor: "#292A32" },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
