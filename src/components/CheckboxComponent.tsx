import { Box, Checkbox, Container, FormControlLabel, IconButton, Paper, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SecondData from "../data/SecondData.json"
import { useState } from "react";

export const CheckboxComponent = () => {

  const [display1, setDisplay1] = useState(true);
  const [checked1, setChecked1] = useState([true, false]);
  const [display2, setDisplay2] = useState(true);
  const [checked2, setChecked2] = useState([true, false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, checked1[1]]);
  };
  
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], event.target.checked]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, checked2[1], checked2[2]]);
  };
  
  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], event.target.checked, checked2[2]]);
  };

  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], checked2[1], event.target.checked]);
  };

  const firstFunctions = [handleChange2, handleChange3];
  const secondFunctions = [handleChange5, handleChange6, handleChange7]
  
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>

      {
        SecondData[0].sub_departments.map((item, index)=> {
          return (
            <FormControlLabel 
              label={item}
              control={<Checkbox checked={checked1[index]} onChange={firstFunctions[index]} />}
            />
          )
        })
      }

    </Box>
  );

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>

      {
        SecondData[1].sub_departments.map((item, index)=> {
          return (
            <FormControlLabel 
              label={item}
              control={<Checkbox checked={checked2[index]} onChange={secondFunctions[index]} />}
            />
          )
        })
      }

    </Box>
  );


  return (
    <>
      <Container sx={{display:"flex", justifyContent:"center", pt:4}}>
        <Paper elevation={3} sx={{display:"flex", justifyContent:"center", mt:5, width:'50%'}}>

          <Stack direction={"column"}>
            <Typography variant="h6" sx={{pt:3}}>Checkboxes</Typography>
            
            <Box sx={{pt:3}}>
              <Box>
                <IconButton onClick={()=>setDisplay1(!display1)}>
                  {display1 && <ExpandLessIcon/>}
                  {(!display1) && <ExpandMoreIcon/>}
                </IconButton>
                <FormControlLabel
                label={SecondData[0].department}
                control={
                  <Checkbox
                    checked={checked1[0] && checked1[1]   }
                    indeterminate={checked1[0] !== checked1[1]}
                    onChange={handleChange1}
                  />
                }
              />
              </Box>
            {display1 && children}
            </Box>
            
            <Box sx={{pb:5, pt:2}}>
              <Box>
                <IconButton onClick={()=>setDisplay2(!display2)}>
                  {display2 && <ExpandLessIcon/>}
                  {(!display2) && <ExpandMoreIcon/>}
                </IconButton>
                <FormControlLabel
                label={SecondData[1].department}
                control={
                  <Checkbox
                    checked={checked2[0] && checked2[1] && checked2[2]  }
                    indeterminate={checked2[0] !== checked2[1] || checked2[1] !== checked2[2] || checked2[0] !== checked2[2]}
                    onChange={handleChange4}
                  />
                }
              />
              </Box>
            {display2 && children2}
            </Box>

            
            </Stack>

          </Paper>
      </Container>
    </>
  )
}
