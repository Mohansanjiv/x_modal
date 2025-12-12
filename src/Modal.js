// Modal.js
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function CustomModal({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;

    return (
        <div
            className="modal"
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
            onClick={onClose}  // outside click
        >
            <Box
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                sx={{
                    bgcolor: "white",
                    padding: 4,
                    width: 350,
                    borderRadius: 2,
                    boxShadow: 24,
                }}
            >
                <Typography variant="h6" mb={2} sx={{ textAlign: "center", fontWeight: "bold" }}>
                    Fill Details
                </Typography>

                <form onSubmit={onSubmit}>
                    <TextField id="username" name="username" label="Username" fullWidth margin="normal" required />

                    <TextField id="email" name="email" label="Email" fullWidth margin="normal" required />

                    <TextField id="phone" name="phone" label="Phone" fullWidth margin="normal" required />

                    <TextField
                        id="dob"
                        name="dob"
                        type="date"
                        label="Date of Birth"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="submit-button"
                        sx={{ marginTop: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
}
