import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "sepatu baru",
    price: 10000,
    image: "./images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores commodi magni praesentium tempore natus.",
  },
  {
    id: 2,
    title: "sepatu lama",
    price: 20000,
    image: "./images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores commodi magni praesentium tempore natus.",
  },
  {
    id: 3,
    title: "sepatu bekas",
    price: 5000,
    image: "./images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores commodi magni praesentium tempore natus.",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart([{ id: 1, qty: 1}])
  }, [])
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // window.location.href = "./login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}{" "}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div classname="w-1/4">
          <h1 className="">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
