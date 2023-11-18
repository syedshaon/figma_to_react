function Project_single({ title, img }) {
  return (
    <a href="#" className=" p-7  max-w-[704px] text-center lg:text-left   rounded-[20px] shadow-md">
      <img src={img} className="mx-auto" alt={title} />
      <h3 className="text-black p-5 pb-0 text-center  text-[26px] font-semibold font-['Poppins']  ">{title}</h3>
    </a>
  );
}

export default Project_single;
