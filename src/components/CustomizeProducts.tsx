export default function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray cursor-pointer relative bg-siab">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray cursor-pointer relative bg-blue"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray cursor-not-allowed relative bg-pink">
          <div className="absolute w-10 h-[2px] bg-gray rotate-45 left-1/2 rounded-full ring-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <div className="flex items-center gap-3"></div>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-siab text-siab rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-siab text-white bg-siab rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-siab text-white bg-pink rounded-md py-1 px-4 text-sm cursor-pointer">
          Large
        </li>
      </ul>
    </div>
  );
}
