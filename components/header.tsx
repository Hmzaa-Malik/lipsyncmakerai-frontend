import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight">
            LipSync<span className="text-muted-foreground">AI</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#research"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Research
          </Link>
          <Link
            href="#product"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Product
          </Link>
          <Link
            href="#studios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Studios
          </Link>
          <Link
            href="#company"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Company
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Launch Studio</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
