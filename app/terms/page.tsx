export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-green-900/20" />

      <div className="relative max-w-4xl mx-auto px-6 py-20">

        <div className="mb-16">

          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 mb-6">
            📜 Terms & Conditions
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Terms of
            <span className="block text-green-400">
              Service
            </span>
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl leading-8">
            Please read these terms carefully before using Toklio.
          </p>

        </div>

        <div className="grid gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">
              Independent Platform
            </h2>

            <p className="text-zinc-400 leading-8 text-lg">
              Toklio is not affiliated with TikTok or ByteDance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">
              User Responsibility
            </h2>

            <p className="text-zinc-400 leading-8 text-lg">
              Users are fully responsible for how downloaded content is used.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">
              Copyright
            </h2>

            <p className="text-zinc-400 leading-8 text-lg">
              Copyrighted material should only be downloaded for personal use
              and according to local laws.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4">
              Service Availability
            </h2>

            <p className="text-zinc-400 leading-8 text-lg">
              Toklio may update or modify the service at any time without notice.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}