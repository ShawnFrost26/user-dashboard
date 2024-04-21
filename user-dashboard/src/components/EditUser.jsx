import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const EditUser = ({ user, onSave }) => {
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'companyName') {
      // Update the company name within the user object
      setEditedUser({
        ...editedUser,
        company: {
          ...editedUser.company,
          name: value
        }
      });
    } else {
      // For other fields, update directly in the user object
      setEditedUser({ ...editedUser, [name]: value });
    }
  };
  

  const handleSave = () => {
    onSave(editedUser);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="companyName"
            label="Company"
            type="text"
            fullWidth
            name="companyName"
            value={editedUser.company.name}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditUser;
