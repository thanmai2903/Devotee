import React from "react";
function Header() {
  return (
    <div>
      <div className="bg-amber-950 text-white hidden lg:block px-36 py-4 ">
        UP TO 60% OFF CLEARANCE SALE FIRST TIME: GET 10% OFF ON YOUR FIRST
        PURCHASE. NEW ITEMS ADDED: | FREE SHIPPING
      </div>
      <div className="flex">
        <div className="flex">
          <div>
            <img
              className="lg:w-20 sm:w-20 w-20 ml-5 mt-5 lg:ml-20 sm:ml-20 sm:mt-2 lg:mt-3"
              src="https://www.suyogah.com/cdn/shop/files/suyogah_logo-maroon_f9e7f933-7ea5-4829-84cd-ab7d5a06d59e.png?v=1699434726&width=150"
            />
          </div>
          <div>
            <img
              className="md:hidden block lg:hidden w-10 mt-10 sm:ml-96 ml-72"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAPFBMVEX///+bm5uYmJiioqKrq6vh4eHZ2dno6OiOjo77+/uenp739/fw8PCRkZHIyMjl5eXCwsK8vLzPz8+2trbv+JpeAAABkUlEQVR4nO3c0Y6DIBCFYUDUiijavv+7rvZmr7oyzSZMp//3BJxgAAM5zgEAAAAAAAAAAAAA8I9yPyjU5zei9DF4lVLshVGmbVGaxfuwbJMoy7q0HvJfllWSpqidlqcQimBidtUTc0zNXj81c+vBXgl+rg6Tb61He+VWv0CP+sOM1WGKpTCmPrO5az3YC6GrXwCc7j3z3DXrs7jcqd41Qyc6bQ5JcZqQBkkWNw0xqBUH0UHzMK6PqNJjrV+Wf815VCgL1jEAAAAAAAAAAIDPkkuvUHnn8VzZY6dS3AVPmp6me2p9c/lausvuNAfFl83eB9Ft86g6y5FGcEc7bdpfaAheac6p9WivpG99PKf8KzvC1C/PpsLo/8wWweM5SwuAqaVZ+6YZJJumreOMrYOmqV+Ak6GfMwAAAAAAAAAAgI9gqNzAUO2EqUIQS1Utpkp0LNUbqS+e8oLiqax8Yr63ec5UGFOfmfrHc5LqSVOloNrrWr2krtVWka6pimNnqnz6ZKgWHAAAAAAAAAAAAACAl34AunlEVM2Ncm8AAAAASUVORK5CYII="
            />
          </div>
        </div>
        <div className="hidden lg:block ml-20 mt-10 cursor-pointer shadow-lg">
          <span className="ml-10 hover:text-slate-400">Home</span>
          <span className="ml-10 hover:text-slate-400">Brass God Idols</span>
          <span className="ml-10 hover:text-slate-400">Copper God Idols</span>
          <span className="ml-10 hover:text-slate-400">Pooja Essentials</span>
          <span className="ml-10 hover:text-slate-400">Decor</span>
          <span className="ml-10 hover:text-slate-400">Best Sellers</span>
          <span className="ml-10 hover:text-slate-400">Festive Collection</span>
          <span className="ml-10 hover:text-slate-400">Clearance Sale</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
