import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="footer footer-center mb-4 mt-8">
      &copy; Yiğit Arısoy {year}
    </footer>
  );
}

export default Footer;
