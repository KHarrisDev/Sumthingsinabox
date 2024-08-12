// 15632
export default function Add() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div></div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-siab text-siab py-2 px-2 hover:bg-siab hover:text-white disabled:cursor-not-allowed disabled:bg-pink disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
    </div>
  );
}
