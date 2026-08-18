import { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { getUsers, createUser, updateUser, deleteUser as deleteUserApi } from "../api";
import ChildrenSection from "./ChildrenSection";
import CustomModal from "./CustomModal";
import UserItem from "./UserItem";

const inputSx = {
  "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "#FFFFFF", fontSize: "14px" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#191A23" },
};

export default function Crud({ users, setUsers }) {
  const [open, setOpen] = useState(false);
  const [nameTeam, setNameTeam] = useState("");
  const [levelTeam, setLevelTeam] = useState("");
  const [descTeam, setDescTeam] = useState("");

  const [openEdit, setOpenEdit] = useState(false);
  const [editNameTeam, setEditNameTeam] = useState("");
  const [editLevelTeam, setEditLevelTeam] = useState("");
  const [editDescTeam, setEditDescTeam] = useState("");
  const [idx, setIdx] = useState(null);

  const [search, setSearch] = useState("");
  const [readySearch, setReadySearch] = useState("");
  const [level, setLevel] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadySearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  async function addUser() {
    if (nameTeam.trim() === "") return;

    let user = {
      nameTeam: nameTeam,
      levelTeam: levelTeam,
      descTeam: descTeam,
    };

    await createUser(user);

    const data = await getUsers();
    setUsers(data);

    setOpen(false);
    setNameTeam("");
    setLevelTeam("");
    setDescTeam("");
  }

  function editUser(item) {
    setOpenEdit(true);
    setEditNameTeam(item.nameTeam);
    setEditLevelTeam(item.levelTeam);
    setEditDescTeam(item.descTeam);
    setIdx(item.id);
  }

  async function onEditSave() {
    await updateUser(idx, {
      nameTeam: editNameTeam,
      levelTeam: editLevelTeam,
      descTeam: editDescTeam,
    });

    setUsers(
      users.map((el) => {
        if (el.id == idx) {
          return { ...el, nameTeam: editNameTeam, levelTeam: editLevelTeam, descTeam: editDescTeam };
        }
        return el;
      })
    );

    setOpenEdit(false);
  }

  async function deleteUser(id) {
    await deleteUserApi(id);
    setUsers(users.filter((el) => el.id != id));
  }

  const levels = users
    .map((el) => el.levelTeam)
    .filter((el, i, arr) => el && arr.indexOf(el) === i);

  const filterUser = users.filter((el) =>
    (el.nameTeam || "").toLowerCase().includes(readySearch.toLowerCase())
  );

  const showUser =
    level === "all" ? filterUser : filterUser.filter((el) => el.levelTeam === level);

  return (
    <ChildrenSection
      title="Manage Team"
      text="Add, edit or remove a team member. Search and filter by level work on the same live data."
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <TextField
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search....."
          sx={{ ...inputSx, flexGrow: 1 }}
        />

        <TextField
          select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          sx={{ ...inputSx, width: { xs: "100%", md: "260px" } }}
        >
          <MenuItem value="all">All levels</MenuItem>
          {levels.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </TextField>

        <Button
          onClick={() => setOpen(true)}
          sx={{
            padding: "12px 22px",
            borderRadius: "12px",
            backgroundColor: "#191A23",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": { backgroundColor: "#292A32" },
          }}
        >
          Add User +
        </Button>
      </Box>

      <CustomModal open={open} title="Add Modal" handleClose={() => setOpen(false)} onSuccess={addUser}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextField value={nameTeam} onChange={(e) => setNameTeam(e.target.value)} placeholder="Name" sx={inputSx} />
          <TextField value={levelTeam} onChange={(e) => setLevelTeam(e.target.value)} placeholder="Level" sx={inputSx} />
          <TextField value={descTeam} onChange={(e) => setDescTeam(e.target.value)} placeholder="Description" multiline rows={3} sx={inputSx} />
        </Box>
      </CustomModal>

      <CustomModal open={openEdit} title="Edit Modal" handleClose={() => setOpenEdit(false)} onSuccess={onEditSave}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextField value={editNameTeam} onChange={(e) => setEditNameTeam(e.target.value)} placeholder="Name" sx={inputSx} />
          <TextField value={editLevelTeam} onChange={(e) => setEditLevelTeam(e.target.value)} placeholder="Level" sx={inputSx} />
          <TextField value={editDescTeam} onChange={(e) => setEditDescTeam(e.target.value)} placeholder="Description" multiline rows={3} sx={inputSx} />
        </Box>
      </CustomModal>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: "24px",
        }}
      >
        {showUser.length > 0 ? (
          showUser.map((el) => (
            <UserItem key={el.id} item={el} onDelete={deleteUser} onEdit={editUser} />
          ))
        ) : (
          <Typography sx={{ fontSize: "16px", color: "#8A8F98" }}>Users not found</Typography>
        )}
      </Box>
    </ChildrenSection>
  );
}
