"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FA_logo_dark } from "../assets/images/images";
import { useAuth } from "../context/AuthContext";

// Small input styles for shadcn inputs
const inputClass =
  "w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 transition";

const AuthPage = () => {
  const { login, register, requestOtp, resetPassword, confirmPasswordReset } =
    useAuth();
  const [mode, setMode] = useState("login"); // "login", "register", "verify", "forgot", "reset"
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    otp: "",
    newPassword: "",
    resetOtp: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Password policy
  const validatePassword = (pw) =>
    pw.length >= 8 &&
    pw.length <= 10 &&
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /\d/.test(pw) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(pw);

  // Input handler
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Registration Step 1: request OTP
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(form.password)) {
      toast.error(
        "Password must be 8–10 chars, upper/lowercase, number, special char."
      );
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      await requestOtp(form.email);
      toast.success("OTP sent! Check your email.");
      setMode("verify");
    } catch (error) {
      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Registration Step 2: verify OTP and create user
  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form.email, form.password, form.displayName, form.otp);
      toast.success("Registration complete!");
      router.push("/profile");
    } catch (error) {
      toast.error(error.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success("Welcome back!");
      router.push("/profile");
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Forgot password: request OTP
  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(form.email);
      toast.success("Reset code sent!");
      setMode("reset");
    } catch (error) {
      toast.error(error.message || "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  // Reset password with OTP
  const handleReset = async (e) => {
    e.preventDefault();
    if (!validatePassword(form.newPassword)) {
      toast.error("Password must meet requirements.");
      return;
    }
    setLoading(true);
    try {
      await confirmPasswordReset(form.email, form.resetOtp, form.newPassword);
      toast.success("Password reset! Please login.");
      setMode("login");
    } catch (error) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  // UI
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <form
        className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-none px-3 py-6 flex flex-col gap-4 items-center"
        onSubmit={
          mode === "login"
            ? handleLogin
            : mode === "register"
            ? handleRegister
            : mode === "verify"
            ? handleVerify
            : mode === "forgot"
            ? handleForgot
            : handleReset
        }
      >
        <Image
          src={FA_logo_dark}
          width={48}
          height={48}
          alt="Home of Fragrance"
          className="mb-3"
        />
        <h1 className="text-lg font-bold text-center text-black mb-2">
          {mode === "login" && "Welcome back"}
          {mode === "register" && "Create your account"}
          {mode === "verify" && "Verify your email"}
          {mode === "forgot" && "Forgot password"}
          {mode === "reset" && "Reset password"}
        </h1>

        {(mode === "login" ||
          mode === "forgot" ||
          mode === "reset" ||
          mode === "verify") && (
          <Input
            type="email"
            name="email"
            autoComplete="email"
            className={inputClass}
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
            size="sm"
          />
        )}

        {mode === "login" && (
          <div className="relative w-full">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              className={inputClass}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              size="sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-2 text-gray-400"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        )}

        {mode === "register" && (
          <>
            <Input
              type="text"
              name="displayName"
              className={inputClass}
              placeholder="Full name (e.g. John Doe)"
              value={form.displayName}
              onChange={handleChange}
              required
              size="sm"
            />
            <Input
              type="email"
              name="email"
              autoComplete="email"
              className={inputClass}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              size="sm"
            />
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                className={inputClass}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                size="sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-2 text-gray-400"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <Input
              type="password"
              name="confirmPassword"
              className={inputClass}
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              size="sm"
            />
          </>
        )}

        {mode === "verify" && (
          <InputOTP
            maxLength={6}
            value={form.otp}
            onChange={(val) => setForm((f) => ({ ...f, otp: val }))}
          >
            <InputOTPGroup>
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}

        {mode === "reset" && (
          <>
            <InputOTP
              maxLength={6}
              value={form.resetOtp}
              onChange={(val) => setForm((f) => ({ ...f, resetOtp: val }))}
            >
              <InputOTPGroup>
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <div className="relative w-full">
              <Input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                autoComplete="new-password"
                className={inputClass}
                placeholder="New password"
                value={form.newPassword}
                onChange={handleChange}
                required
                size="sm"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword((v) => !v)}
                className="absolute right-2 top-2 text-gray-400"
                tabIndex={-1}
              >
                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </>
        )}

        {/* CONTINUE/SUBMIT BUTTON */}
        <Button
          type="submit"
          disabled={loading}
          size="sm"
          className="w-full rounded-md bg-[#15132b] text-white font-semibold py-2 mt-2 transition hover:bg-[#201c3e] focus:outline-none"
        >
          {loading
            ? "Loading..."
            : mode === "login"
            ? "Continue"
            : mode === "register"
            ? "Continue"
            : mode === "verify"
            ? "Verify"
            : mode === "forgot"
            ? "Send code"
            : "Reset password"}
        </Button>

        {/* Terms/Privacy */}
        <span className="text-xs text-gray-400 text-center mt-2">
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </span>

        {/* Switch modes */}
        <div className="mt-2 text-center text-xs text-gray-500">
          {mode === "login" && (
            <>
              <span>Don&apos;t have an account? </span>
              <a
                href="#"
                className="text-amber-600 font-medium underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("register");
                }}
              >
                Sign up
              </a>
              <br />
              <a
                href="#"
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("forgot");
                }}
              >
                Forgot password?
              </a>
            </>
          )}
          {mode === "register" && (
            <>
              <span>Already have an account? </span>
              <a
                href="#"
                className="text-amber-600 font-medium underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("login");
                }}
              >
                Login
              </a>
            </>
          )}
          {mode === "forgot" && (
            <>
              <a
                href="#"
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("login");
                }}
              >
                Back to login
              </a>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
