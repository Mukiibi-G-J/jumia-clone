import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import { Copyright } from "@material-ui/icons";
import {
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../utils/theme";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";


const prefix_list = [
  "Algeria +213",
  "Australia +61",
  "Austria +43",
  "Bahrain +973",
  "Belgium +32",
  "Botswana +267",
  "Cameroon +237",
  "Canada +1",
  "China +86",
  "Côte d'Ivoire +225",
  "Denmark +45",
  "Egypt +20",
  "Finland +358",
  "France +33",
  "Germany +49",
  "Ghana +233",
  "Greece +30",
  "Hong Kong +852",
  "Hungary +36",
  "India +91",
  "Indonesia +62",
  "Ireland +353",
  "Israel +972",
  "Italy +39",
  "Japan +81",
  "Kenya +254",
  "Kuwait +965",
  "Lebanon +961",
  "Luxembourg +352",
  "Malaysia +60",
  "Morocco +212",
  "Netherlands +31",
  "Niger +227",
  "Nigeria +234",
  "Norway +47",
  "Oman +968",
  "Portugal +351",
  "Qatar +974",
  "Rwanda +250",
  "Saudi Arabia +966",
  "Senegal +221",
  "Sierra Leone +232",
  "Singapore +65",
  "Somalia +252",
  "South Africa +27",
  "South Korea +82",
  "Spain +34",
  "Sweden +46",
  "Switzerland +41",
  "Tanzania +255",
  "Tunisia +216",
  "Turkey +90",
  "Tuvalu +688",
  "UAE +971",
  "Uganda +256",
  "United States +1",
  "United Kingdom +44",
];


function register() {
  const [prefix, setPrefix] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
      setPrefix(event.target.value);
    };
  const handleSubmit = (e) => {};

  const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="images/myjumia-top-logo.png"
            alt="log"
            height={60}
            width={60}
          />
          <Typography component="h1" variant="h5" color="#000">
            What's your email address?
          </Typography>
          <Typography
            component="h1"
            variant="body2"
            color="#504A4A"
            sx={{ mt: 4 }}
          >
            Type your email to log in or create a Jumia account.
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            style={{ width: "450px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{ color: "#F7962C" }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
             
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Prefix</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Prefix"
                      value={prefix}
                      onChange={handleChange}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                        multiple
                    >
                    
                      {prefix_list.map((p) => {
                        <MenuItem value={p}>{p}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Box>

                {/* <TextField
                  required
                  fullWidth
                  id="prefix"
                  label="Prefix"
                  name="prefix"
                  autoComplete="prefix"
                  sx={{ color: "#F7962C" }}
                /> */}
              </Grid>
              <Box flex={1} />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 6, mb: 2 }}
              style={{ marginTop: 10 }}
              color="secondary"
            >
              Continue
            </Button>

            <Link
              href="#"
              variant="body"
              color="secondary"
              underline="none"
              style={{ marginTop: 6 }}
            >
              Already have an account? Login
            </Link>
            <GoogleLoginButton
              onClick={() => alert("Hello")}
              style={{ marginTop: 40 }}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default register;
