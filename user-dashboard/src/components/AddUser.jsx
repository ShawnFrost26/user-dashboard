import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddUser = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    company: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAdd = () => {
    onAdd(newUser);
    setOpen(false);
    // Reset the form fields after adding the user
    setNewUser({
      name: '',
      username: '',
      email: '',
      company: ''
    });
  }
  return (
    <div>
      <Button onClick={handleClickOpen}>Add User</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="company"
            label="Company"
            type="text"
            fullWidth
            name="company"
            value={newUser.company}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUser;
