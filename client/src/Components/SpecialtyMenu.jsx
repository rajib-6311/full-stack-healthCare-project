import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialtyMenu = () => {
  return (
    <div className="py-14 text-center">
      <h1 className="text-3xl font-bold">Find by Specialty</h1>
      <p className="sm:w-1/3 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
        impedit.
      </p>

      <div className="flex items-center justify-center mt-12 gap-6 flex-wrap">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transform transition-transform duration-500 hover:-translate-y-2"
          >
            <img className="w-16" src={item.image} alt={item.speciality} />
            <p className="mt-5">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMenu;
