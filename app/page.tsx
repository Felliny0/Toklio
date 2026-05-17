"use client"

import { useState } from "react"
import axios from "axios"
export default function Home() {
  const [url, setUrl] = useState("")
const [loading, setLoading] = useState(false)
const handleDownload = async () => {
  if (!url) return

  try {
    setLoading(true)

    const response = await axios.get(
      `https://www.tikwm.com/api/?url=${url}`
    )

    const video = response.data.data.play

    window.location.href = video
  } catch (err) {
    alert("Download failed")
  } finally {
    setLoading(false)
  }
}
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10 backdrop-blur-xl">
        <h1 className="text-3xl font-black tracking-tight">
          Toklio
        </h1>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            FAQ
          </a>

          <a href="#" className="hover:text-white transition">
            API
          </a>
        </div>

        <button className="bg-purple-500 hover:bg-purple-400 transition px-5 py-2 rounded-2xl font-semibold shadow-lg shadow-purple-500/20">
          Start Now
        </button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 relative">

        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

        <div className="bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-sm mb-8">
          🚀 Fast • HD Quality • No Login
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Download TikTok Videos
          <span className="text-purple-400">
            {" "}Instantly
          </span>
        </h1>

        <p className="text-zinc-400 mt-6 max-w-2xl text-lg md:text-xl leading-8">
          Fast TikTok video downloads in HD quality with a clean and modern experience.
        </p>

        {/* INPUT */}
        <div className="w-full max-w-4xl mt-12 bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl shadow-2xl">

          <div className="flex flex-col md:flex-row gap-4">

            <input
  type="text"
  placeholder="Paste TikTok link here..."
  value={url}
  onChange={(e) => setUrl(e.target.value)}
  className="flex-1 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 px-6 text-white outline-none"
/>

            <button
  onClick={handleDownload}
  className="h-16 px-10 rounded-2xl bg-green-500 hover:bg-green-400 transition font-bold text-white shadow-lg"
>
  {loading ? "Loading..." : "Download"}
</button>

          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 w-full max-w-4xl">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
            <h2 className="text-3xl font-black">10M+</h2>
            <p className="text-zinc-400 mt-2">
              Downloads
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
            <h2 className="text-3xl font-black">HD</h2>
            <p className="text-zinc-400 mt-2">
              Quality
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
            <h2 className="text-3xl font-black">Free</h2>
            <p className="text-zinc-400 mt-2">
              Forever
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
            <h2 className="text-3xl font-black">24/7</h2>
            <p className="text-zinc-400 mt-2">
              Available
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-10 pb-24">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Why Toklio?
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Everything you need in one modern TikTok downloader.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl hover:bg-white/10 transition">

            <div className="text-5xl mb-5">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Super Fast
            </h3>

            <p className="text-zinc-400 leading-7">
              Download TikTok videos instantly with blazing fast processing.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl hover:bg-white/10 transition">

            <div className="text-5xl mb-5">
              🎬
            </div>

            <h3 className="text-2xl font-bold mb-3">
              HD Quality
            </h3>

            <p className="text-zinc-400 leading-7">
              Save high quality videos without losing resolution.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl hover:bg-white/10 transition">

            <div className="text-5xl mb-5">
              🔒
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Safe & Secure
            </h3>

            <p className="text-zinc-400 leading-7">
              No login required. Completely anonymous and easy to use.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Toklio. All rights reserved.
      </footer>

    </main>
  );
}