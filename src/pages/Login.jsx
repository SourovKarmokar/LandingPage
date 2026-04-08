import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginAPI } from "../services/auth";

const Login = () => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const verified  = location.state?.verified;

  const [form, setForm]       = useState({ email: "", password: "", remember_me: false });
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await loginAPI({
        ...form,
        remember_me: form.remember_me ? "true" : "false",
      });
      const token = res.data?.token || res.data?.data?.token;
      if (token) localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(254,85,43,0.15),_transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-[480px]">
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-[Tilt_Warp] text-[32px] md:text-[40px] text-white mb-2">
              Welcome Back
            </h1>
            <p className="font-primary text-white/60 text-[15px]">
              Login to your MuscleForge account
            </p>
          </div>

          {/* Success from OTP verify */}
          {verified && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-[14px] rounded-[12px] px-4 py-3 mb-6 font-primary">
              ✓ Email verified successfully! Please login.
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[14px] rounded-[12px] px-4 py-3 mb-6 font-primary">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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
              <div className="flex justify-between items-center mb-1">
                <label className="font-primary text-white/70 text-[13px]">Password</label>
                <Link to="/forgot-password" className="font-primary text-primary text-[12px] hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Your password"
                className="w-full bg-white/10 border border-white/20 rounded-[14px] px-4 py-3 text-white placeholder-white/30 outline-none font-primary text-[15px] focus:border-primary transition-colors"
              />
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="remember_me"
                checked={form.remember_me}
                onChange={handleChange}
                className="w-4 h-4 accent-primary"
              />
              <span className="font-primary text-white/60 text-[13px]">Remember me</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-primary font-bold text-[18px] py-4 rounded-[18px] hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <p className="font-primary text-white/50 text-[14px] text-center mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;