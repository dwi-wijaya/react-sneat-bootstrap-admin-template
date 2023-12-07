const Footer = () => {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
              <div className="mb-2 mb-md-0">
                ©
                <script>
                  document.write(new Date().getFullYear());
                </script>
                , made with ❤️ by
                <a href="https://themeselection.com" target="_blank" className="footer-link fw-medium">ThemeSelection</a>
              </div>
              <div className="d-none d-lg-inline-block">
                <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>

                <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                  target="_blank" className="footer-link me-4">Documentation</a>

                <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank"
                  className="footer-link">Support</a>
              </div>
            </div>
          </footer>
      );
}
export default Footer;