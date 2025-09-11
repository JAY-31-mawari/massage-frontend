export default function SideFilter({
  show,
  setShow,
  selectService,
  setSelectService,
  serviceTypes,
  userSelectedService
}: {
  show: any;
  setShow: any;
  selectService: string;
  setSelectService: any;
  serviceTypes: string[];
  userSelectedService: string
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-800">
          Select your Service-Type
        </h4>
      </div>

      {/* Radio Options */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-blue-600">
          <input
            type="radio"
            name="service"
            checked={selectService === ""}
            onChange={() => setSelectService("")}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          All
        </label>
        {serviceTypes.map((service, index) => {
          if(service === "Home-Based Practice" && userSelectedService !== "Massage Therapy"){
            return null;
          }
          const checked = service === selectService;
          return (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-blue-600"
            >
              <input
                type="radio"
                name="service"
                checked={checked}
                onChange={() => setSelectService(service)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              {service}
            </label>
          );
        })}
      </div>
    </div>
  );
}
