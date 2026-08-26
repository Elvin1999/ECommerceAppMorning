import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Typography
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";

function CartPage() {
    const cartItems = [];

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mb: 5 }}
            >
                Shopping Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Box
                    sx={{
                        textAlign: "center",
                        py: 10
                    }}
                >
                    <Typography variant="h5">
                        Your cart is empty
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 1, mb: 3 }}
                    >
                        Add some products to your cart.
                    </Typography>

                    <Button
                        variant="contained"
                        href="/products"
                    >
                        Continue Shopping
                    </Button>
                </Box>
            ) : (
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        {cartItems.map((item) => (
                            <Card
                                key={item.id}
                                sx={{ mb: 2 }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems:
                                                "center",
                                            gap: 3
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={
                                                item.imageUrl
                                            }
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                objectFit:
                                                    "cover",
                                                borderRadius: 2
                                            }}
                                        />

                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography
                                                variant="h6"
                                                fontWeight="bold"
                                            >
                                                {item.name}
                                            </Typography>

                                            <Typography>
                                                $
                                                {item.price}
                                            </Typography>
                                        </Box>

                                        <Typography>
                                            × {item.quantity}
                                        </Typography>

                                        <IconButton color="error">
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                >
                                    Order Summary
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        mt: 4
                                    }}
                                >
                                    <Typography>
                                        Subtotal
                                    </Typography>

                                    <Typography>
                                        ${subtotal.toFixed(2)}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        mt: 2
                                    }}
                                >
                                    <Typography>
                                        Shipping
                                    </Typography>

                                    <Typography>
                                        $10.00
                                    </Typography>
                                </Box>

                                <Divider sx={{ my: 3 }} />

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between"
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                    >
                                        Total
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                    >
                                        $
                                        {(
                                            subtotal + 10
                                        ).toFixed(2)}
                                    </Typography>
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{ mt: 4 }}
                                >
                                    Checkout
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default CartPage;