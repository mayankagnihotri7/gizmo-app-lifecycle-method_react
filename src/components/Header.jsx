import React from "react";

function Header(props) {
  return (
    <div className='header-color'>
      <ul className="flex">
        <h1 className="logo">Gizmo-Revisited</h1>
        <div>
          <input
            type="search"
            placeholder="Search Articles"
            className="search-box"
            onChange={props.click}
          />
        </div>
      </ul>
    </div>
  );
}

export default Header;
