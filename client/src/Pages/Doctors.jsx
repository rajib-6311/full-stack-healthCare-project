import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoctors, setFilterDoctors] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctors(
        doctors.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-lg font-semibold">Browse through the Doctors Specialist</p>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        {/* Sidebar Speciality Menu */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() => navigate("/doctors/General Physician")}
            className="w-[150px] border border-gray-300 px-4 py-1 transition-all cursor-pointer hover:bg-blue-100"
          >
            General Physician
          </p>
          <p
            onClick={() => navigate("/doctors/Gynecologist")}
            className="w-[150px] border border-gray-300 px-4 py-1 transition-all cursor-pointer hover:bg-blue-100"
          >
            Gynecologist
          </p>
          <p
            onClick={() => navigate("/doctors/Dermatologist")}
            className="w-[150px] border border-gray-300 px-4 py-1 transition-all cursor-pointer hover:bg-blue-100"
          >
            Dermatologist
          </p>
          <p
            onClick={() => navigate("/doctors/Neurologist")}
            className="w-[150px] border border-gray-300 px-4 py-1 transition-all cursor-pointer hover:bg-blue-100"
          >
            Neurologist
          </p>
          <p
            onClick={() => navigate("/doctors/Gastroenterologist")}
            className="w-[150px] border border-gray-300 px-4 py-1 transition-all cursor-pointer hover:bg-blue-100"
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterDoctors.length > 0 ? (
            filterDoctors.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              >
                <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-xl font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-4">No doctors found for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
