
import {AiTwotoneDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex my-10">

        <div className="mx-8 w-1/2">
          <img src={item.image} alt="not found" className="" />
        </div>
        <div className="">
          <h1 className="font-bold text-lg mb-5">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between mx-3 my-5">
            <p className="text-green-700 font-bold text-lg">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <AiTwotoneDelete size={25}/>
            </div>
          </div>

        </div>


      </div>
      <div className="h-[2px] w-[11/12] bg-black my-5"></div>

    </div>
  );
};

export default CartItem;
