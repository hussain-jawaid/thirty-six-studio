import React from "react";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Example header with theme toggle */}
      <header className="border-border border-b p-6">
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl font-bold">
            Thirty Six Studio
          </h1>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="bg-muted hover:bg-primary rounded-lg p-2 transition-colors hover:text-white"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Example content using theme variables */}
      <main className="p-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            At Thirtysixstudio, we build digital assets and immersive
            experiences for purposeful brands.
          </h2>

          <p className="text-secondary mb-8 text-lg">
            We're a boutique production studio focused on design, animation, and
            technology, constantly rethinking what digital craft can do for
            present-day ads and campaigns.
          </p>

          {/* Example cards using different theme colors */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-muted border-border rounded-lg border p-6">
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Design
              </h3>
              <p className="text-secondary">
                Beautiful, purposeful design that tells your story.
              </p>
            </div>

            <div className="bg-muted border-border rounded-lg border p-6">
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Animation
              </h3>
              <p className="text-secondary">
                Bringing your ideas to life with motion and emotion.
              </p>
            </div>

            <div className="bg-muted border-border rounded-lg border p-6">
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Technology
              </h3>
              <p className="text-secondary">
                Cutting-edge tech solutions for modern challenges.
              </p>
            </div>
          </div>

          {/* Example button using accent color */}
          <div className="mt-8 text-center">
            <button className="bg-accent rounded-lg px-8 py-3 text-white transition-opacity hover:opacity-90">
              Talk to us
            </button>
          </div>

          {/* Debug info - remove this in production */}
          <div className="bg-muted mt-8 rounded-lg p-4">
            <p className="text-secondary text-sm">
              Current theme:{" "}
              <span className="text-foreground font-mono">{theme}</span> | Dark
              mode:{" "}
              <span className="text-foreground font-mono">
                {isDark ? "true" : "false"}
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
