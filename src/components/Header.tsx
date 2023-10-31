import React from "react";

const Header = () => {
  /* create logo for html element, src by google keep */
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  return (
    <div className="header">
      {logo}
      <h3>Keep</h3>
    </div>
  );
  /* === render
  <div className="header">
    <img />
    <h3>Keep</h3>
  </div> */
};

export default Header;
