export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="AniTrain home"><img src="/anitrain-icon.png" alt="" /></a>
          <div><strong>AniTrain</strong><span>Daily fitness with anime energy.</span></div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/about">About</a>
          <a href="/blog">Journal</a>
          <a href="/advertise">Advertise</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/delete-account">Delete account</a>
          <a href="https://play.google.com/store/apps/details?id=com.anitrain" target="_blank" rel="noopener noreferrer">Android ↗</a>
        </nav>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AniTrain.</span>
          <span><a href="/privacy">Privacy</a> · <a href="/delete-account">Account deletion</a></span>
          <a href="https://www.linkedin.com/in/programmerukesh/" target="_blank" rel="noopener noreferrer">Built with ♥ by GrowWithUkesh ↗</a>
        </div>
      </div>
    </footer>
  );
}
