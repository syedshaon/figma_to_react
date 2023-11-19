function Subscribe() {
  return (
    <div className="container  px-2 md:px-7 min-h-[499px] flex justify-center items-center">
      <div className="content text-center">
        <h4 className="text-green-500 text-xl font-medium  uppercase mb-10">SUBSCRIBE</h4>
        <p className="  text-center text-black text-3xl font-semibold  capitalize md:max-w-[500px] mx-auto mb-2">Subscribe to get the latest news about us</p>
        <small className="text-center block text-zinc-500 text-base font-medium  capitalize md:max-w-[500px] mx-auto  ">Please drop your email below to get daily update about what we do</small>
        <form className=" mt-10 px-1 max-w-[90%] mx-auto  py-1 rounded-[14px] border border-black  flex justify-between flex-col md:flex-row gap-5    items-center   ">
          <input type="email" className="focus:border-0 outline-0 w-full mt-2 md:mt-0 md:max-w-7/12  text-center text-zinc-500   text-base font-normal " placeholder="Enter Your Email Adress" />
          <button className=" inline-block max-w-3/12 px-5 py-2  bg-orange-600 rounded-[10px]   text-white text-base font-medium "> Subscribe </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
