import { doctors } from "../assets/assets_frontend/assets";


const TopDoctors = () => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="text-4xl font-bold">Top Doctor to Book </h1>
            <p className="w-1/2 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, a nesciunt! Tempora tempore molestiae saepe vitae nobis non nisi. Fuga.</p>

            <div className="grid grid-cols-4 gap-5 mt-12">
                {
                    doctors.slice(0,12).map((item, index)=>(
                       <div className="border border-blue-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                        <img className="bg-blue-50" src={item.image} alt="" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                            </div>
                            <p className="text-gray-900 text-xl font-medium">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.speciality}</p>
                        </div>
                       </div>
                    ))
                }
            </div>
          <div className="py-20">
              <button className="py-2 bg-blue-600 px-8 rounded-full">see more</button>
          </div>
        </div>
    );
};

export default TopDoctors;