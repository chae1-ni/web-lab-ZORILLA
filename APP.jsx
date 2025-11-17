import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CAFE Finder</h1>
        <div className="flex gap-6 text-lg">
          <button onClick={() => setPage("home")} className="hover:underline">Home</button>
          <button onClick={() => setPage("dashboard")} className="hover:underline">Dashboard</button>
          <button onClick={() => setPage("login")} className="hover:underline">Login</button>
        </div>
      </nav>

      <div className="p-6">
        {/* HOME PAGE */}
        {page === "home" && (
          <div className="space-y-6">
            <div className="bg-amber-700 text-white h-64 flex items-center justify-center rounded-xl shadow-inner">
              <h1 className="text-5xl font-bold">CAFE Finder</h1>
            </div>

            <h2 className="text-2xl font-bold mt-6">Popular Cafés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="p-4 border rounded-xl shadow">
                  <p className="font-semibold">“Quote”</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-semibold">Title</p>
                      <p className="text-sm text-gray-600">Description</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {[1,2,3].map((i) => (
              <div key={i} className="p-4 border rounded-xl shadow flex gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded" />
                <div className="flex-1">
                  <h2 className="font-bold">CAFE {i}</h2>
                  <p className="text-sm text-gray-600">Body text for whatever you'd like to say. Add takeaway points, quotes, anecdotes, or short story.</p>
                  <button className="mt-2 px-4 py-1 bg-gray-800 text-white rounded">Button</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LOGIN FORM */}
        {page === "login" && (
          <div className="max-w-sm mx-auto mt-10 p-6 border rounded-xl shadow space-y-4">
            <h1 className="text-xl font-bold">Login</h1>
            <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
            <input type="password" placeholder="Password" className="p-2 border rounded w-full" />
            <button className="w-full bg-black text-white p-2 rounded">Sign In</button>
            <p className="text-sm underline text-gray-600 cursor-pointer">Forgot password?</p>
          </div>
        )}
      </div>
    </div>
  );
}