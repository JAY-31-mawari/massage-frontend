import { useState } from "react";
import bg1 from "../assets/img/p-1.jpg";
import bg2 from "../assets/img/p-2.jpg";
import bg3 from "../assets/img/p-3.jpg";
import bg4 from "../assets/img/p-4.jpg";

export default function ServiceDetailPage() {
  const images = [
    bg1, bg2, bg3, bg4
  ];

  const services = ["Full Body Massage", "Aromatherapy", "Hot Stone Massage"];
  const providers = [
    { name: "Sophia", img: "/images/provider1.jpg" },
    { name: "Liam", img: "/images/provider2.jpg" },
    { name: "Emma", img: "/images/provider3.jpg" },
  ];

  const slots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <div className="min-h-screen bg-[#fdf8f5] p-4 md:p-8 flex flex-col md:flex-row gap-6">
      
      {/* Left - Images */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={selectedImage}
            alt="Service"
            className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex gap-3 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 border-2 ${
                selectedImage === img ? "border-[#d4a373]" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right - Details */}
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">
        {/* Business Info */}
        <div>
          <h1 className="text-2xl font-bold text-[#3d2b1f]">Serenity Spa</h1>
          <p className="text-[#6b4f3f]">123 Relax Street, Bliss City</p>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block mb-2 font-medium text-[#3d2b1f]">Choose Service</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#d4a373] outline-none"
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select Service</option>
            {services.map((srv, idx) => (
              <option key={idx} value={srv}>{srv}</option>
            ))}
          </select>
        </div>

        {/* Provider Selection */}
        <div>
          <p className="mb-2 font-medium text-[#3d2b1f]">Select Provider</p>
          <div className="flex gap-4">
            {providers.map((prov, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProvider(prov.name)}
                className={`flex flex-col items-center cursor-pointer group ${
                  selectedProvider === prov.name ? "scale-105" : ""
                }`}
              >
                <img
                  src={prov.img}
                  alt={prov.name}
                  className={`w-16 h-16 object-cover rounded-full border-2 transition-all duration-300 ${
                    selectedProvider === prov.name ? "border-[#d4a373]" : "border-transparent"
                  }`}
                />
                <span className="mt-1 text-sm text-[#3d2b1f]">{prov.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slot Selection */}
        <div>
          <p className="mb-2 font-medium text-[#3d2b1f]">Available Slots</p>
          <div className="grid grid-cols-3 gap-3">
            {slots.map((time, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSlot(time)}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  selectedSlot === time
                    ? "bg-[#d4a373] text-white border-[#d4a373]"
                    : "bg-white text-[#3d2b1f] border-gray-300 hover:bg-[#f4e4d9]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Booking Button */}
        <button
          className="w-full py-3 bg-[#d4a373] hover:bg-[#c08267] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
