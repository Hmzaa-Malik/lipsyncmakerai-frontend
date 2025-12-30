import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <Link href="/" className="inline-block mb-8">
              <div className="text-3xl font-bold tracking-tight">
                LipSync<span className="text-muted-foreground">AI</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <LoginForm />

          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/signup" className="font-medium text-foreground hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual Background */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <blockquote className="space-y-4">
            <p className="text-2xl font-medium leading-relaxed">
              "LipSyncAI has revolutionized how we create content. The quality is simply outstanding."
            </p>
            <footer className="text-sm text-zinc-400">
              <div className="font-medium text-white">Sarah Chen</div>
              <div>Creative Director, MediaPro Studios</div>
            </footer>
          </blockquote>
        </div>

        {/* Ambient gradient effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
