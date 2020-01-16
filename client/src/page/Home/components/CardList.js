import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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

function SpacingGrid({items}) {

  const classes = useStyles();
  return (
    <>
    { items === null || undefined || '' || items.length < 1 ?  <h1> Sorry.., we don't have item what your search.. </h1> :
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                {items.map((item) => (
                    <Grid key={item.id} item>
                        <MediaCard item={item}/>  
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
  }
  </>
  );
}


export default SpacingGrid


