import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar>
          <img src="src\assets\rocket-logo.png" />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", px: 2 }}
          >
            GrowMeOrganic
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
