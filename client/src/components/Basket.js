import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;
    console.log(order)
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '500px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Varkorg" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Varkorg är tomt!</ListItem>
                ) : (
                    <>
                    {order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                            Totalt summan:{' '}
                            {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            SEK 
                        </Typography>
                        <Typography>
                            {' + hemleverans frakt 39SEK'}
                        </Typography>
                    </ListItem>
                        <Button variant="contained" sx={{ml: '1rem'}} 
                        onClick={() => {
                            alert('Dän sidan ska vidare till Stripe eller Klarna');
                        }}>Till betalningen</Button>
                    </>
                )}

            </List>
        </Drawer>
    )
}

export default Basket
