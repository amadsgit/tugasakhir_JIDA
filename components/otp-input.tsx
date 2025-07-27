'use client'

import { useEffect, useRef, useState } from 'react';

export default function OtpInput({
  onChangeOtp,
  disabled = false,
}: {
  onChangeOtp: (val: string) => void;
  disabled?: boolean;
}) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 6) {
      onChangeOtp(fullOtp);
    } else {
      onChangeOtp('');
    }
  }, [otp]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 mb-4 justify-center">
      {otp.map((val, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          disabled={disabled}
          className={`w-10 h-12 text-center border rounded text-xl ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}`}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          ref={(el) => {
            inputsRef.current[i] = el!;
          }}
        />
      ))}
    </div>
  );
}
