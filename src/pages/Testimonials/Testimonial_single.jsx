function Testimonial_single({ img, review, name, contact }) {
  return (
    <div href="#" className=" p-7  max-w-[704px] text-center lg:text-left   rounded-[20px]   shadow-md">
      <img src={img} className="pb-7 mx-auto" alt={name} />
      <p className="  text-center text-neutral-400 text-base font-normal    leading-relaxed">{review}</p>
      <h3 className="text-black p-5 pb-3  text-center  text-[26px] font-semibold font-['Poppins']  ">{name}</h3>
      <p className="text-black text-base  text-center  font-normal">{contact}</p>
    </div>
  );
}

export default Testimonial_single;
