import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useState } from "react";
import { Person } from "../models/Interfaces";
import { useNavigate } from "react-router-dom";

type Props = {
  setUserExists: Dispatch<SetStateAction<boolean>>;
  invalidTry: boolean;
};

export const Form: React.FC<Props> = (props: Props) => {
  const [person, setPerson] = useState<Person>({
    name: "",
    phone: 0,
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPerson((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    localStorage.setItem("datakey", JSON.stringify(person));
    //Saving data to local storage
    console.log(localStorage.getItem("datakey"));

    props.setUserExists(true);
    navigate("/secondPage");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={6}
            sx={{
              width: "60%",
              alignSelf: "auto",
              marginTop: 2,
              py: 4,
              display: "flex",
              justifyContent: "center",
              height: 400,
            }}
          >
            <Stack
              direction={"column"}
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="h4" color="initial">
                User Info
              </Typography>

              <TextField
                id="name-input"
                type="text"
                label="Name"
                variant="outlined"
                name="name" //used in person object useState
                required
                onChange={handleChange}
              />

              <TextField
                id="phone-input"
                type="number"
                label="Phone No."
                variant="outlined"
                name="phone"
                required
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                fullWidth
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {props.invalidTry ? (
                <Typography color={"red"}>
                  Please enter details first
                </Typography>
              ) : (
                <></>
              )}

              <Button
                type="submit"
                variant="outlined"
                sx={{ width: 90, display: "flex", alignSelf: "center" }}
              >
                Submit
              </Button>
            </Stack>
          </Paper>
        </Container>
      </form>
    </>
  );
};
