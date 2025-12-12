// App.js
import { useState } from "react";
import CustomModal from "./Modal";
import "./App.css";
import { Box, Button, Typography } from "@mui/material";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const dob = e.target.dob.value;
    const today = new Date().toISOString().split("T")[0];

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return;
    }

    if (dob > today) {
      alert("Invalid date of birth");
      return;
    }

    console.log("Form submitted!");
    closeModal();
  };

  return (
    <div id="root" style={{ height: "100vh", textAlign: "center" }}>

      <Box>
        <Typography sx={{ fontSize: "50px", fontWeight: "semibold" }}>User Details Modal</Typography>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="submit-button"
          sx={{
            marginTop: 2,
            paddingY: 1,
            width: "200px"
          }}
          onClick={openModal}>Open Form</Button>
      </Box>

      {isOpen && (
        <div className="modal">
          <CustomModal
            isOpen={isOpen}
            onClose={closeModal}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
