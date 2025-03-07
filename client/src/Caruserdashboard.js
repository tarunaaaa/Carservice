import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Edit, Logout, Delete, AddCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";

const Caruserdashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const userEmail = localStorage.getItem("userEmail"); // Get email from local storage
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    age: "",
  });

  // Fetch user data
  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:8080/getuserdata?email=${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200 && data.user) {
            setUser(data.user);
            setUpdatedUser(data.user); // Initialize updatedUser with current user data
          } else {
            console.error("User not found!");
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [userEmail]);

  // Fetch user bookings
  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:8080/getuserbooking?email=${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200 && data.bookings) {
            setBookings(data.bookings);
          } else {
            console.error("No bookings found!");
          }
        })
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [userEmail]);

  // Handle cancel booking
  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  // Handle edit profile
  const handleEditProfile = () => {
    if (!user || !(user._id || user.id)) {
      console.error("User data is missing or incomplete!", user);
      alert("User data is missing. Please log in again.");
      return;
  }

    // Prepare the updated user data
    const updatedData = {
      id: user._id || user.id, // Ensure correct ID is sent
      name: updatedUser.name,
      email: updatedUser.email,
      mobile: updatedUser.mobile,
      password: updatedUser.password,
      age: updatedUser.age,
  };

    console.log("Sending Update Request:", updatedData);

    fetch("http://localhost:8080/updateuser", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 200) {
                setUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser)); // Save updated user data
                setOpenEditDialog(false);
                alert("Profile updated successfully!");
            } else {
                console.error("Failed to update profile:", data.error);
                alert("Failed to update profile. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error updating user:", error);
            alert("An error occurred. Please try again.");
        });
};

  // Handle add booking
  const handleAddBooking = () => {
    alert("Add Booking functionality coming soon!");
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "#0056b3",
          color: "#fff",
        }}
      >
        <Typography variant="h4">
          {user ? `Welcome, ${user.name}!` : "Loading..."}
        </Typography>
        <Typography variant="body1">
          Manage your profile and bookings efficiently.
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          sx={{ mt: 2, bgcolor: "#80c8ff", color: "#003366" }}
          onClick={handleAddBooking}
        >
          Add New Booking
        </Button>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: "center",
              bgcolor: "#003366",
              color: "#fff",
              borderRadius: 3,
            }}
          >
            {user ? (
              <>
                <Avatar
                  src={user.avatar}
                  sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
                />
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="body1">📧 {user.email}</Typography>
                <Typography variant="body1">📱 {user.mobile}</Typography>
                <Typography variant="body1">🔑 {user.password}</Typography>
                <Typography variant="body1">🎂 Age: {user.age}</Typography>
                <Button
                  variant="contained"
                  startIcon={<Edit />}
                  sx={{ mt: 2, bgcolor: "#80c8ff", color: "#003366" }}
                  onClick={() => setOpenEditDialog(true)}
                >
                  Edit Profile
                </Button>
              </>
            ) : (
              <Typography>Loading user data...</Typography>
            )}
          </Paper>
        </Grid>

        {/* Edit Profile Dialog */}
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              margin="dense"
              value={updatedUser.name}
              onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
            />
            <TextField
              label="Email"
              fullWidth
              margin="dense"
              value={updatedUser.email}
              onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            />
            <TextField
              label="Mobile"
              fullWidth
              margin="dense"
              value={updatedUser.mobile}
              onChange={(e) => setUpdatedUser({ ...updatedUser, mobile: e.target.value })}
            />
            <TextField
              label="Password"
              fullWidth
              margin="dense"
              type="password"
              value={updatedUser.password}
              onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
            />
            <TextField
              label="Age"
              fullWidth
              margin="dense"
              type="number"
              value={updatedUser.age}
              onChange={(e) => setUpdatedUser({ ...updatedUser, age: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
            <Button onClick={handleEditProfile} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>

        <Grid item xs={12} md={8}>
          <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom color="#0056b3">
              My Bookings
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ bgcolor: "#0056b3" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Car Brand
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Car Type
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Service Type
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Timing
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Notes
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.id}</TableCell>
                        <TableCell>{booking.name}</TableCell>
                        <TableCell>{booking.carBrand}</TableCell>
                        <TableCell>{booking.carType}</TableCell>
                        <TableCell>{booking.serviceType}</TableCell>
                        <TableCell>{booking.timing}</TableCell>
                        <TableCell>{booking.notes}</TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleCancelBooking(booking.id)}
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} align="center">
                        No bookings found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={4} sx={{ mt: 4, textAlign: "center", p: 2, borderRadius: 3 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#0056b3", color: "#fff" }}
          startIcon={<Logout />}
          onClick={() => setLogoutDialog(true)}
        >
          Logout
        </Button>
      </Paper>

      <Dialog open={logoutDialog} onClose={() => setLogoutDialog(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialog(false)}>Cancel</Button>
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Caruserdashboard;