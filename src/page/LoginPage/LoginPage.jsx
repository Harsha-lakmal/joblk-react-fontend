import React, { useState } from 'react';
import {
    Checkbox, TextField, Button, Typography, Box,
    FormControlLabel, Select, MenuItem, InputLabel,
    FormControl, OutlinedInput, ThemeProvider, CssBaseline
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#000000' },
        text: { primary: '#ffffff' },
    },
});

const roles = ['Employee', 'Trainer'];

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [tandc, setTandc] = useState(false);

    const handleLogin = () => {
        if (!email || !password || !role) {
            alert('Please fill in all fields.');
            return;
        }
        alert(`Logging in with\nEmail: ${email}\nRole: ${role}\nT&C Accepted: ${tandc}`);
    };

    const handleSignUp = () => {
        console.log('Sign Up button clicked');
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    p: 2,
                }}
            >
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        width: { xs: '90%', sm: '350px' },
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: '#121212',
                        boxShadow: 5,
                    }}
                >
                    <Typography variant="h4" textAlign="center" fontWeight="bold">
                        Login
                    </Typography>

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            input={<OutlinedInput label="Role" />}
                        >
                            {roles.map((role) => (
                                <MenuItem key={role} value={role}>{role}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox checked={tandc} onChange={(e) => setTandc(e.target.checked)} />}
                        label={<Typography>I agree to the Terms & Conditions</Typography>}
                    />

                    <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                        Login
                    </Button>

                    <Button variant="outlined" color="primary" fullWidth onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
