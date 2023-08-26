import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" flex justify-center ">
  {
    cart.length > 0  ? 
    (<div className="flex   gap-10">


      <div className="w-[550px]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between mt-10 mb-10">

        <div >
          <div className="font-semibold text-green-700">YOUR CART</div>
          <div className="text-4xl font-bold text-green-700 mb-4">SUMMARY</div>
          <p>
            <span className="font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="w-[300px]">
          <p className="py-2">Total Amount:<span className="font-bold">${totalAmount}</span> </p>
          <button className="border rounded-lg px-3 py-2 w-full bg-green-700 font-bold text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-[50px]">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-[30px] font-bold border rounded-lg px-4 bg-green-400 hover:bg-green-600 hover:text-white">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
