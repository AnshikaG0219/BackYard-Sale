import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './CartItemStyles'

export default function CartItem({item, onRemoveFromCart, onUpdateCartQty}) {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h4">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    <Button variant="contained" type="button" color="secondary" onClick={()=> onRemoveFromCart(item)}>Remove</Button>
                </div>
            </CardActions>
        </Card>
    )
}