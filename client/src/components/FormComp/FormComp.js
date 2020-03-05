import React from "react";
import { Button, Grid, IconButton, Input, TextField,FormControl,Select,MenuItem,InputLabel} from "@material-ui/core/";
import { Delete as DeleteIcon } from "@material-ui/icons/";
import { useFormState } from "react-use-form-state";

function FormComp() {
  let [formState, { text }] = useFormState();
  const inputLabel = React.useRef(null);

  return (
    <div style={{ padding: "1rem" }}>
      <Grid container>
        <Grid item xs={3}>
          <Button variant="contained">Default</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary">Primary</Button>
        </Grid>
        <Grid item xs={3}>
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <Input placeholder="email"></Input>
        </Grid>
        <Grid item xs={3}>
          <TextField
            placeholder="email"
            {...text("email")}
            onChange={() => {
              console.log(formState.values.email);
            }}
            variant="outlined"
            label="email"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="outlined" >
            
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={20}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormComp;
