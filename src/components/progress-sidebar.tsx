import React from "react";
import { Check } from "lucide-react";
import { Info } from "lucide-react";

interface ProgressSidebarProps {
  currentStep: number;
  setCurrentStep: (idx: number) => void;
}

const steps = [
  {
    title: "Basic Information",
    description: "Company details, address, & contact info",
  },
  { title: "Practitioner Details", description: "Professional information" },
  {
    title: "Banking Details",
    description: "Account number, and other related info",
  },
  { title: "Preview & Submit", description: "Review and finalize" },
];

const ProgressSidebar: React.FC<ProgressSidebarProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 flex flex-col">
      {/* Horizontal Steps */}
      <div className="flex justify-between items-center relative mb-6">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

        {/* Progress line */}
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -z-10 transition-all duration-700 ease-out"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;
          const isClickable = stepNumber <= currentStep;

          return (
            <div
              key={step.title}
              onClick={() => isClickable && setCurrentStep(stepNumber)}
              className={`flex items-center gap-3 ${
                isClickable ? "cursor-pointer" : "opacity-60 cursor-not-allowed"
              }`}
            >
              {/* Circle */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border font-semibold text-sm transition-all duration-300 shadow-sm ${
                  isCompleted
                    ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-indigo-500"
                    : isActive
                    ? "bg-white text-indigo-600 border-indigo-500 ring-2 ring-indigo-200"
                    : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>

              {/* Title + info beside number */}
              <div className="flex items-center gap-1">
                <span
                  className={`text-md font-medium ${
                    isActive ? "text-indigo-700" : "text-gray-600"
                  }`}
                >
                  {step.title}
                </span>
                <div className="group relative">
                  <button className="w-4 h-4 flex items-center justify-center">
                    <Info className="w-4 h-4" />
                  </button>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-52 bg-white border border-gray-200 rounded-md shadow-md p-2 text-xs text-gray-600 hidden group-hover:block z-20">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Progress Bar */}
      <div className="mt-auto">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600 font-medium">Setup Progress</span>
          <span className="font-semibold text-indigo-600">
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
