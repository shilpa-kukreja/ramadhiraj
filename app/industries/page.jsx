"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  {
    title: "Railway & Locomotive",
    img: "/industries/industry/railway.webp",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Oil and Gas & Compressed Air",
    img: "/industries/industry/metal.webp",
    desc: "Built to withstand pressure and environment in oil and gas operations.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Cement",
    img: "/industries/industry/cement_manufacturing.webp",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Mining",
    img: "/industries/industry/mining.webp",
    desc: "Digging for natural resources while providing safety and reliability.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Pharmaceutical & Compressed Air",
    img: "/industries/industry/pharmaceutical.webp",
    desc: "Precision processes require purity and reliability.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Plastics",
    img: "/industries/industry/bottle.webp",
    desc: "Manufacturing plastic products involves precision and consistency.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Compressed Air Purity for Food & Beverage Production",
    img: "/industries/industry/refinery.webp",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Healthcare",
    img: "/industries/industry/medical.webp",
    desc: "Clean, high-quality machinery is vital to the medical field.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Woodworking & Compressed Air",
    img: "/industries/industry/wood.webp",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "General Manufacturing",
    img: "/industries/industry/machine.webp",
    desc: "Manufacturers rely on compressed air for efficiency.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Automotive",
    img: "/industries/industry/car.webp",
    desc: "Compressed air systems optimize production in the auto industry.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  }
];

export default function IndustriesPage() {
  return (
    <>
    <Navbar/>

<div className="bg-gray-100 min-h-screen sm:mt-30">
      
      {/* HERO SECTION */}
      <div className="relative h-[300px] w-full">
        <img
          src="/industries/banner.png"
          alt="Industries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">INDUSTRIES</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-gray-700">
          Industries
        </h2>

        <div className="space-y-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 border-b pb-8"
            >
              {/* IMAGE */}
              <div className="md:w-1/3 w-full h-[180px] ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-2/3 w-full">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxe text-align">
                  {item.desc}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    <Footer/>
    </>
    
  );
}