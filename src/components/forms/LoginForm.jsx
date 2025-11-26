import React, { useState } from "react";

const LoginForm = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-none px-3 py-6 flex flex-col gap-4 items-center"
    >
      <h1 className="text-sm font-bold text-center text-black mb-2">
        Welcome back to Home Of Fragrances
      </h1>
      <input
        type="email"
        className="w-full rounded-md border border-gray-200 px-3 py-3 text-sm"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full rounded-md border border-gray-200 px-3 py-3 text-sm"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[#15132b] text-white font-semibold py-2 mt-2 transition hover:bg-[#201c3e]"
      >
        {loading ? "Loading..." : "Continue"}
      </button>
      <div className="mt-2 text-center text-sm text-gray-500">
        <span>Don't have an account? </span>
        <button
          type="button"
          className="text-amber-600 font-medium underline"
          onClick={onSwitchToRegister}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
