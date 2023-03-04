function Footer() {
  return (
    <footer className="page-footer cyan darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/viix54/reactShop3"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
