import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';

import { IconButton} from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem } from'../../../redux/cart/cart.actions';

const useStyles = makeStyles({
  card: {
    width:300,
    height:300
  },
  media: {
    height: 140,
  },
});


 function MediaCard({item, addItem, history}) {
  const classes = useStyles();
  const {url, title, price, des, city, category } = item
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title={title}
          onClick={() => history.push('/itemDetail') }
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
        <IconButton onClick={() => addItem(item)} >
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



const mapDispatchToProps = dispatch => ({
   addItem: (item) => dispatch(addItem(item))
})

export default withRouter(connect(null,
  mapDispatchToProps
  )(MediaCard))