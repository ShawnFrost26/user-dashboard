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
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    company: '',
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
    // Reset the error for the field when user starts typing again
    setErrors({ ...errors, [name]: '' });
  };

  const validateInputs = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!newUser.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate username
    if (!newUser.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate email
    if (!newUser.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(newUser.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate company
    if (!newUser.company) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAdd = () => {
    if (validateInputs()) {
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
  };

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
            error={Boolean(errors.name)}
            helperText={errors.name}
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
            error={Boolean(errors.username)}
            helperText={errors.username}
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
            error={Boolean(errors.email)}
            helperText={errors.email}
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
            error={Boolean(errors.company)}
            helperText={errors.company}
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
