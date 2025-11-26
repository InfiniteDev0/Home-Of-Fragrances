"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { FA_logo_dark } from "../../../../public/assets/images/images";
import { useAuth } from "@/app/context/AuthContext";

const inputClass =
  "w-full rounded-md  border border-gray-200 px-3 py-3 text-xs  focus:outline-none focus:ring-2 focus:ring-amber-200 transition";

const AuthPage = () => {
  const { login, register, mode, setMode } = useAuth();
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
  const searchParams = useSearchParams();

  useEffect(() => {
    const msg = searchParams?.get("message") || searchParams?.get("error");
    if (msg === "not-authorized" || msg === "no-account") {
      toast.error("You don't have an account. Login or create a new one.");
    }
  }, [searchParams]);

  const validatePassword = (pw) =>
    pw.length >= 8 &&
    pw.length <= 10 &&
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /\d/.test(pw) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(pw);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const requestOtp = async (email) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/request-verification-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.error || data?.message || "Failed to send OTP");
    }
    return true;
  };

  const sendResetCode = async (email) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/password/send-code`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(
        data?.error || data?.message || "Failed to send reset code"
      );
    }
    return true;
  };

  const confirmPasswordReset = async (email, code, newPassword) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/password/reset`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, newPassword }),
      }
    );
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(
        data?.error || data?.message || "Failed to reset password"
      );
    }
    return true;
  };

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
    await toast.promise(requestOtp(form.email), {
      loading: "Sending OTP...",
      success: "OTP sent! Check your email.",
      error: (err) => err.message || "Failed to send OTP",
    });
    // ✅ only switch mode after success
    setMode("verify");
  } finally {
    setLoading(false);
  }
};

const handleVerify = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await toast.promise(
      (async () => {
        const reg = await register(
          form.email,
          form.password,
          form.displayName,
          form.otp
        );
        if (!reg || reg.success === false) {
          throw new Error(
            reg?.message || "Verification failed. Please try again."
          );
        }

        const res = await login(form.email, form.password);
        if (!res || res.success === false) {
          throw new Error(res?.message || "Login after verification failed");
        }

        // ✅ only switch mode after success
        setMode("login");
        setTimeout(() => router.push("/myhof"), 1200);
      })(),
      {
        loading: "Verifying OTP...",
        success: "Your profile has been verified!",
        error: (err) => err.message || "Invalid OTP",
      }
    );
  } finally {
    setLoading(false);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await toast.promise(
      (async () => {
        const res = await login(form.email, form.password);
        if (!res || !res.success) {
          throw new Error(res?.message || "Login failed");
        }
        router.push("/myhof");
      })(),
      {
        loading: "Logging in...",
        success: "Welcome back!",
        error: (err) => err.message || "Login failed",
      }
    );
  } finally {
    setLoading(false);
  }
};

const handleForgot = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await toast.promise(sendResetCode(form.email), {
      loading: "Sending reset code...",
      success: "Reset code sent!",
      error: (err) => err.message || "Failed to send code",
    });
    // ✅ only switch mode after success
    setMode("reset");
  } finally {
    setLoading(false);
  }
};

const handleReset = async (e) => {
  e.preventDefault();
  if (!validatePassword(form.newPassword)) {
    toast.error("Password must meet requirements.");
    return;
  }

  setLoading(true);
  try {
    await toast.promise(
      (async () => {
        await confirmPasswordReset(form.email, form.resetOtp, form.newPassword);
        // ✅ only switch mode after success
        setMode("login");
      })(),
      {
        loading: "Resetting password...",
        success: "Password reset! Please login.",
        error: (err) => err.message || "Failed to reset password",
      }
    );
  } finally {
    setLoading(false);
  }
};
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
        <Link href="/eng-e1/homepage">
          <Image
            src={FA_logo_dark}
            alt="Home Of Fragrances"
            width={100}
            height={100}
            className="mx-auto w-5 mb-2"
          />
        </Link>
        <h1 className="text-sm font-bold text-center text-black mb-2">
          {mode === "login" && "Welcome back to Home Of Fragrances"}
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
            <Link
              href="#"
              className="underline text-xs font-semibold tracking-wide text-gray-600 px-2"
              onClick={(e) => {
                e.preventDefault();
                setMode("forgot");
              }}
            >
              Forgot password?
            </Link>
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

        <span className="text-xs font-semibold tracking-wider  text-black text-center mt-2">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </span>

        <div className="mt-2 text-center text-sm text-gray-500 font-semibold">
          {mode === "login" && (
            <>
              <span>Don&apos;t have an account? </span>
              <Link
                href="#"
                className="text-red-600 font-semibold underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("register");
                }}
              >
                Sign up
              </Link>
            </>
          )}
          {mode === "register" && (
            <>
              <span>Already have an account? </span>
              <Link
                href="#"
                className="text-amber-600 font-medium underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("login");
                }}
              >
                Login
              </Link>
            </>
          )}
          {mode === "forgot" && (
            <>
              <Link
                href="#"
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("login");
                }}
              >
                Back to login
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
