import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OTPSectionProps {
  email?: string;
  phone?: string;
  onVerify: (otp: string) => void;
  onBack: () => void;
  isLoading?: boolean;
}

const OTPSection: React.FC<OTPSectionProps> = ({
  email,
  phone,
  onVerify,
  onBack,
  isLoading = false
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input when component mounts
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      setActiveIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      setActiveIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length === 6) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      setActiveIndex(5);
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      onVerify(otpString);
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">Verify OTP</h1>
        <p className="mt-2 text-sm text-gray-600">
          We've sent a verification code to{' '}
          <span className="font-medium text-gray-900">
            {email || phone}
          </span>
        </p>
      </motion.div>

      {/* OTP Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-6"
      >
        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
            >
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`
                  w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg
                  transition-all duration-200 focus:outline-none
                  ${activeIndex === index
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : digit
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-gray-400'
                  }
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                disabled={isLoading}
              />
            </motion.div>
          ))}
        </div>

        {/* Verify Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={handleVerify}
          disabled={!isOtpComplete || isLoading}
          className={`
            w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
            ${isOtpComplete && !isLoading
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying...</span>
            </div>
          ) : (
            'Verify OTP'
          )}
        </motion.button>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          onClick={onBack}
          disabled={isLoading}
          className="w-full py-2 px-4 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
        >
          ← Back to Registration
        </motion.button>

        {/* Resend OTP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600">
            Didn't receive the code?{' '}
            <button
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              disabled={isLoading}
            >
              Resend OTP
            </button>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OTPSection; 