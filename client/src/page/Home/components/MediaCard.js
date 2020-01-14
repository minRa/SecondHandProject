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
    width:300,
    height:300
  },
  media: {
    height: 140,
  },
});


export default function MediaCard({ url, title, price, des, city, category}) {
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
            <h5><strong>{title}</strong> </h5> 
            {des}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="left">
             category: {category} 
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
        <Typography variant="h6"  component="h6" align="right">
               {city}
        </Typography>
      </CardActions>
    </Card>
  );
}
