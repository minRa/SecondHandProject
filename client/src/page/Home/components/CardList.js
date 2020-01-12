import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import itemData from './itemData';
import MediaCard from'./MediaCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {

  const classes = useStyles();
  return (
      
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          {itemData.map(({id, ...otherProps}) => (
            <Grid key={id} item>
                 <MediaCard {...otherProps}/>  
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}







