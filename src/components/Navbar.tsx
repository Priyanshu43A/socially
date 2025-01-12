import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo/Brand */}
        <div className="mr-8">
          <Link href="/" className="text-xl font-semibold text-primary">
            Socially
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 mr-6">
          <Link 
            href="/feed" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Feed
          </Link>
          <Link 
            href="/explore" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Explore
          </Link>
          <Link 
            href="/messages" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Messages
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/" mode="modal">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                }
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar