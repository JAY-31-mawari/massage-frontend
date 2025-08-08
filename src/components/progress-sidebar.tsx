import React from 'react';
import { Check } from 'lucide-react';

interface ProgressSidebarProps {
  currentStep: number;
  setCurrentStep: (idx: number) => void;
}

const steps = [
  { title: 'Basic Information', description: 'Company details and contact info' },
  { title: 'Business Address', description: 'Location and address details' },
  { title: 'Business Photos', description: 'Upload your business images' },
  { title: 'Practitioner Details', description: 'Professional information' },
  { title: 'Preview & Submit', description: 'Review and finalize' },
];

const ProgressSidebar: React.FC<ProgressSidebarProps> = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="w-80 px-8 py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-r border-indigo-100 shadow-sm">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Setup Progress</h2>
        <p className="text-sm text-gray-600">Complete all steps to finish your registration</p>
      </div>
      
      <div className="relative">
        {/* Background vertical line */}
        <div className="absolute left-6 top-8 w-0.5 bg-gray-200" 
             style={{ height: `${(steps.length - 1) * 96 + 24}px` }} />
        
        {/* Animated progress line */}
        <div 
          className="absolute left-6 top-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out shadow-sm"
          style={{ 
            height: `${Math.max(0, ((currentStep - 1) / (steps.length - 1)) * ((steps.length - 1) * 96 + 24))}px` 
          }}
        />
        
        <ul className="space-y-6">
          {steps.map((step, idx) => {
            const stepNumber = idx + 1;
            const isActive = currentStep === stepNumber;
            const isCompleted = currentStep > stepNumber;
            const isClickable = stepNumber <= currentStep;
            
            return (
              <li
                key={step.title}
                onClick={() => isClickable && setCurrentStep(stepNumber)}
                className={`flex items-start space-x-4 relative group transition-all duration-300 ${
                  isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
                } py-3`}
              >
                {/* Step indicator with proper background to cover line */}
                <div className="relative z-20 flex-shrink-0">
                  {/* Background circle to completely cover the line */}
                  <div className="absolute inset-0 w-12 h-12 bg-white rounded-full" />
                  
                  <div
                    className={`relative w-12 h-12 rounded-full border-3 flex items-center justify-center
                      transition-all duration-300 shadow-lg backdrop-blur-sm
                      ${isCompleted 
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-500 text-white shadow-indigo-200' 
                        : isActive 
                        ? 'bg-gradient-to-br from-white to-indigo-50 border-indigo-500 text-indigo-700 shadow-indigo-200 ring-4 ring-indigo-100' 
                        : 'bg-white border-gray-300 text-gray-500 shadow-gray-100'
                      }
                      ${isClickable ? 'group-hover:scale-110 group-hover:shadow-xl' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 drop-shadow-sm" />
                    ) : (
                      <span className="text-sm font-bold">{stepNumber}</span>
                    )}
                  </div>
                  
                  {/* Pulse animation for active step */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse opacity-30" />
                    </>
                  )}
                </div>
                
                {/* Step content */}
                <div className="flex-1 min-w-0 pt-2">
                  <div className={`text-base font-semibold transition-colors duration-200 ${
                    isActive ? 'text-indigo-700' : 
                    isCompleted ? 'text-gray-800' : 
                    'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                  <div className={`text-sm mt-1 transition-colors duration-200 ${
                    isActive ? 'text-indigo-600' : 
                    isCompleted ? 'text-gray-600' : 
                    'text-gray-400'
                  }`}>
                    {step.description}
                  </div>
                  
                  {/* Mini progress indicator */}
                  <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden shadow-inner">
                    <div 
                      className={`h-full transition-all duration-700 ease-out rounded-full ${
                        isCompleted ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-full' :
                        isActive ? 'bg-gradient-to-r from-indigo-400 to-purple-400 w-2/3' :
                        'bg-transparent w-0'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Hover effect background */}
                {isClickable && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -m-3 shadow-sm" />
                )}
              </li>
            );
          })}
        </ul>
        
        {/* Enhanced completion indicator */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-gray-600 font-medium">Overall Progress</span>
            <span className="font-bold text-indigo-600 text-base">
              {Math.round((currentStep / steps.length) * 100)}%
            </span>
          </div>
          <div className="relative w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full shadow-sm"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
            {/* Shimmer effect */}
            <div 
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
          
          {/* Completion message */}
          {currentStep === steps.length && (
            <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-green-800">All steps completed!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressSidebar;
