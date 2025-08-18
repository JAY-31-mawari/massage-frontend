import React from "react";
import { Check } from "lucide-react";

interface ProgressSidebarProps {
  currentStep: number;
  setCurrentStep: (idx: number) => void;
}

const steps = [
  {
    title: "Basic Information",
    description: "Company details, address, & contact info",
  },
  { title: "Business Photos", description: "Upload your business images" },
  { title: "Practitioner Details", description: "Professional information" },
  { title: "Preview & Submit", description: "Review and finalize" },
];

const ProgressSidebar: React.FC<ProgressSidebarProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="w-72 h-[550px] p-4 bg-white rounded-xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">Setup Progress</h2>
        <p className="text-xs text-gray-600">
          Finish all steps to complete registration
        </p>
      </div>

      {/* Steps container (scrollable if overflow) */}
      <div className="relative flex-1 overflow-y-auto custom-scrollbar pr-2">
        {/* Background vertical line */}
        {/* <div
          className="absolute left-5 top-8 w-0.5 bg-gray-200"
          style={{ height: `${(steps.length - 1) * 80 + 20}px` }}
        /> */}

        {/* Animated progress line */}
        {/* <div
          className="absolute left-5 top-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-sm"
          style={{
            height: `${Math.max(
              0,
              ((currentStep - 1) / (steps.length - 1)) *
                ((steps.length - 1) * 80 + 20)
            )}px`,
          }}
        /> */}

        <ul className="space-y-4 pl-0">
          {steps.map((step, idx) => {
            const stepNumber = idx + 1;
            const isActive = currentStep === stepNumber;
            const isCompleted = currentStep > stepNumber;
            const isClickable = stepNumber <= currentStep;

            return (
              <li
                key={step.title}
                onClick={() => isClickable && setCurrentStep(stepNumber)}
                className={`flex items-start space-x-3 group relative transition-transform duration-300 ease-in-out ${
                  isClickable
                    ? "cursor-pointer hover:scale-[1.02]"
                    : "cursor-not-allowed opacity-60"
                }`}
              >
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`relative w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                      isCompleted
                        ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-indigo-500"
                        : isActive
                        ? "bg-white text-indigo-600 border-indigo-500 ring-2 ring-indigo-200"
                        : "bg-white text-gray-500 border-gray-300"
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse opacity-20" />
                    )}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm font-semibold ${
                      isActive
                        ? "text-indigo-700"
                        : isCompleted
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div
                    className={`text-xs ${
                      isActive
                        ? "text-indigo-600"
                        : isCompleted
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overall Progress */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-gray-600 font-medium">Overall Progress</span>
          <span className="font-bold text-indigo-600">
            {Math.round((currentStep / steps.length) * 100)}%
          </span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressSidebar;
