"use client";

import Image from "next/image";
export default function CartModal() {
  const cartItems = true; // Assume fetched from server or local state
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          {/* LIST  */}
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM  */}
            <div className="flex gap-4">
              {/* IMAGE CONTAINER*/}
              <Image
                src="https://images.pexels.com/photos/5876725/pexels-photo-5876725.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              {/* TEXT CONTAINER - separates the top and bottom sections */}
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-lightGray rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray">available</div>
                </div>
                {/* BOTTOM  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray">Qty.2</span>
                  <span className="text-blue">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM  */}
            <div className="flex gap-4">
              {/* IMAGE CONTAINER*/}
              <Image
                src="https://images.pexels.com/photos/5876725/pexels-photo-5876725.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              {/* TEXT CONTAINER - separates the top and bottom sections */}
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-lightGray rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray">available</div>
                </div>
                {/* BOTTOM  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray">Qty.2</span>
                  <span className="text-blue">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/*  BOTTOM  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-mdGray text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
