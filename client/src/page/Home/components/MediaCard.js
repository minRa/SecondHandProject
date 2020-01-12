import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard({ url, title, price, des}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           <h5>{title}</h5> {des}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="right">
              Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton >
        <InfoIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
