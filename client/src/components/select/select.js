import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelectCategory({category, setCategory, options, title}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleChange = event => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
            {
                options.map(item => {
                return <MenuItem key={item.id} value={item.value}>{ item.name}</MenuItem>
                })
            }
          {/* <MenuItem value="all">
            <em>All - Items</em>
          </MenuItem>
          <MenuItem value='car'> -- Car -- </MenuItem>
          <MenuItem value='clothes'>Clothes</MenuItem>
          <MenuItem value='others'>Others</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}