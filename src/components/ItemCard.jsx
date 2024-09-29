import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlice';
import { toast } from "react-hot-toast";


const ItemCard = ({ id, name, qty, price, img }) => {
    const dispatch = useDispatch({ id, img, name, price, qty });
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
            <MdDelete onClick={() => {
                dispatch(removeFromCart({ id, price, img, name, qty })//yaha pr bs id bhi de skte ho 
                )
                toast(`${name} Removed`, {
                    icon: "👋🏿👋🏿"
                })
            }}
                className="absolute right-7 text-gray-600 cursor-pointer"
            />
            <img src={img} alt="" className="w-[50px] h-[50px] " />


            <div className="leading-5">
                <h2 className="font-bold text-gray-800">{name}</h2>
                <div className="flex justify-between ">
                    <span className="text-green-500 font-bold">₹{price}</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7">
                        <AiOutlineMinus
                            onClick={() => { qty > 1 ? dispatch(decrementQty({ id, name, price, qty, img })) : dispatch(removeFromCart({ id, name, price, qty })) }}
                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                        />
                        <span>{qty}</span>
                        <AiOutlinePlus
                            onClick={() => { qty >= 1 ? dispatch(incrementQty({ id, price, name, qty, img })) : qty = 0 }}

                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard