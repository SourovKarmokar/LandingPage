import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerAPI } from "../services/auth";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "",
    password: "", password_confirmation: "", terms: false,
  });
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.password_confirmation) {
      setError("Passwords do not match"); return;
    }
    if (!form.terms) {
      setError("Please accept the terms"); return;
    }

    setLoading(true);
    try {
      const res = await registerAPI({ ...form, terms: form.terms ? "true" : "false" });
      // OTP আসে response এ — email সহ OTP page এ পাঠাই
      const otp = res.data?.otp || res.data?.data?.otp || "";
      navigate("/verify-otp", { state: { email: form.email, otp } });
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      setError(typeof msg === "object" ? Object.values(msg).flat().join(", ") : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      {/* Background shape */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(254,85,43,0.15),_transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-[520px]">
        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-[Tilt_Warp] text-[32px] md:text-[40px] text-white mb-2">
              Create Account
            </h1>
            <p className="font-primary text-white/60 text-[15px]">
              Join MuscleForge and start your journey
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[14px] rounded-[12px] px-4 py-3 mb-6 font-primary">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-primary text-white/70 text-[13px] mb-1 block">First Name</label>
                <input
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-primary text-white/70 text-[13px] mb-1 block">Last Name</label>
                <input
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-primary text-white/70 text-[13px] mb-1 block">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-primary text-white/70 text-[13px] mb-1 block">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Min 8 characters"
                className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-primary text-white/70 text-[13px] mb-1 block">Confirm Password</label>
              <input
                name="password_confirmation"
                type="password"
                value={form.password_confirmation}
                onChange={handleChange}
                required
                placeholder="Repeat password"
                className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-primary"
              />
              <span className="font-primary text-white/60 text-[13px] leading-normal">
                I agree to the{" "}
                <span className="text-primary underline cursor-pointer">Terms & Conditions</span>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-primary font-bold text-[18px] py-4 rounded-[18px] hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          {/* Footer */}
          <p className="font-primary text-white/50 text-[14px] text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;