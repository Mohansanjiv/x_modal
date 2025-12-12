// Modal.js
import React from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

export default function CustomModal({ isOpen, onClose, onSubmit }) {
    return (
        <div className="modal"> 
            <Modal
                open={isOpen}
                onClose={onClose}
                hideBackdrop  
                aria-labelledby="modal-title"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    className="modal-content"
                    sx={{
                        bgcolor: "white",
                        padding: 4,
                        width: 350,
                        borderRadius: 2,
                        boxShadow: 24,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Typography id="modal-title" variant="h6" mb={2} sx={{ textAlign: "center", fontWeight: "bold" }}>
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
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            className="submit-button"
                            fullWidth
                            sx={{ marginTop: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
