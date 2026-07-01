export function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-white/5 flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter transition-all duration-300 ease-in-out">
      <div className="font-headline-md text-headline-md text-on-surface mb-4 md:mb-0 hover:-translate-y-1 transition-transform">WP</div>
      <div className="font-caption text-caption text-on-surface-variant">© 2024 WP. Built with precision.</div>
      <a className="font-caption text-caption text-on-surface-variant hover:text-tertiary transition-colors mt-4 md:mt-0 flex items-center gap-1" href="#home">
        Back to top <span className="material-symbols-outlined text-sm">arrow_upward</span>
      </a>
    </footer>
  )
}
