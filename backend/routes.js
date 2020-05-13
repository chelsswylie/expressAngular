myCart = [
  {
    id: "idnm3",
    product: "Jeans",
    price: 75,
    quantity: 2,
  },
  {
    id: "idnm4",
    product: "Dress Shirt",
    price: 30,
    quantity: 1,
  },
  {
    id: "idnm5",
    product: "Shoes",
    price: 50,
    quantity: 1,
  },
  {
    id: "idnm6",
    product: "Sweater",
    price: 45,
    quantity: 1,
  },
];

// Get cart-items /api/cart-items
// router.get("/myCart", (req, res) => {
//   res.json(cartItems);
// });

// Get myCart by ID
// router.get("/myCart/:id", (req, res) => {
//   const item = myCart.filter((x) => x.id === Number(req.params.id));
//   if (item.length >= 1) {
//     res.status(200);
//     res.json(item);
//   } else {
//     res.status(404);
//     res.json({
//       message: `ID: ${req.params.id} not found`,
//     });
//   }
//   res.json(item);
// });

// Post myCart
// router.post("/myCart", (req, res) => {
//   myCart.push(req.body);
//   res.status(201);
//   res.json(myCart);
// });

// Put myCart
// router.put("/myCart/:id", (req, res) => {
//   const idx = myCart.indexOf(req.params.id);
//   res.status(200);
//   res.json(myCart);
// });

// Delete myCart

// router.delete("/myCart/:id", (req, res) => {
//   const idx = myCart.indexOf(req.params.id);
//   myCart.splice(idx, 1);
//   res.status(200);
//   res.json(myCart);
// });

module.exports = router;
