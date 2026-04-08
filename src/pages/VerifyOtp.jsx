import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtpAPI, resendOtpAPI } from "../services/auth";

const VerifyOTP = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const email     = location.state?.email || "";
  const autoOtp   = location.state?.otp   || "";

  const [otp, setOtp]         = useState(["", "", "", "", "", ""]);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState(
    autoOtp ? `Your OTP is: ${autoOtp}` : ""
  );
  const [cooldown, setCooldown] = useState(0);
  const refs = useRef([]);

  // Countdown timer for resend
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const handleInput = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      refs.current[idx - 1]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) { setError("Enter all 6 digits"); return; }
    setError(""); setLoading(true);
    try {
      await verifyOtpAPI({ email, otp: code });
      navigate("/login", { state: { verified: true } });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    try {
      await resendOtpAPI({ email });
      setResendMsg("OTP resent to your email!");
      setCooldown(60);
    } catch {
      setError("Could not resend OTP");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(254,85,43,0.15),_transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-[480px]">
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm text-center">

          {/* Icon */}
          <div className="w-[70px] h-[70px] bg-primary/20 border-2 border-primary/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-primary text-[28px]">✉</span>
          </div>

          <h1 className="font-[Tilt_Warp] text-[30px] md:text-[36px] text-white mb-2">
            Verify Email
          </h1>
          <p className="font-primary text-white/50 text-[14px] mb-2">
            We sent a 6-digit code to
          </p>
          <p className="font-primary text-primary text-[15px] font-medium mb-8">
            {email}
          </p>

          {/* OTP hint from response */}
          {resendMsg && (
            <div className="bg-primary/10 border border-primary/30 text-primary text-[13px] rounded-[12px] px-4 py-3 mb-6 font-primary">
              {resendMsg}
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[13px] rounded-[12px] px-4 py-3 mb-6 font-primary">
              {error}
            </div>
          )}

          <form onSubmit={handleVerify}>
            {/* 6-digit OTP boxes */}
            <div className="flex justify-center gap-x-3 mb-8">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (refs.current[i] = el)}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-[46px] h-[56px] md:w-[52px] md:h-[62px] bg-white/10 border-2 border-white/20 rounded-[14px] text-center text-white text-[22px] font-primary font-bold outline-none focus:border-primary transition-colors"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-primary font-bold text-[18px] py-4 rounded-[18px] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>

          {/* Resend */}
          <p className="font-primary text-white/50 text-[14px] mt-6">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={cooldown > 0}
              className="text-primary hover:underline disabled:opacity-40 disabled:no-underline"
            >
              {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;