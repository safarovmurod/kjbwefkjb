import { Box, Typography, Button, Dialog, IconButton } from "@mui/material";

export default function CustomModal({ open, title, handleClose, onSuccess, children }) {
  if (!open) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: "20px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #E6E8EC",
        }}
      >
        <Typography component="h3" sx={{ fontSize: "18px", fontWeight: 500 }}>
          {title}
        </Typography>
        <IconButton onClick={handleClose} sx={{ fontSize: "16px", color: "#8A8F98" }}>
          ✕
        </IconButton>
      </Box>

      <Box sx={{ padding: "20px" }}>{children}</Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          padding: "16px 20px",
          borderTop: "1px solid #E6E8EC",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            padding: "10px 18px",
            borderRadius: "12px",
            border: "1px solid #191A23",
            color: "#191A23",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onSuccess}
          sx={{
            padding: "10px 18px",
            borderRadius: "12px",
            backgroundColor: "#191A23",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": { backgroundColor: "#292A32" },
          }}
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
}
