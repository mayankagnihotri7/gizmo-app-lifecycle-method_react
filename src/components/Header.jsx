import React from "react";

function Header(props) {
  return (
    <div className="header-color">
      <ul className="flex">
        <h1 className="logo">Gizmo-Revisited</h1>
        <div>
          <form onSubmit={props.submit}>
            <input
              type="search"
              placeholder="Search Articles"
              className="search-box"
              onChange={props.click}
            />
            <label>
              Pick your country:
              <select value={props.value} onChange={props.input}>
                <option value="ar">Ar</option>
                <option value="de">De</option>
                <option value="en">Eng</option>
                <option value="es">Es</option>
                <option value="fr">Fr</option>
                <option value="he">He</option>
                <option value="it">It</option>
                <option value="nl">Nl</option>
                <option value="no">No</option>
                <option value="pt">Pt</option>
                <option value="ru">Ru</option>
                <option value="se">Se</option>
                <option value="ud">Ud</option>
                <option value="zh">Zh</option>
              </select>
            </label>
            <input type="submit" value="Submit" onClick={props.article} />
          </form>
        </div>
        {/* <form onSubmit={props.submit}> */}
        {/* <label>
            Pick your country:
            <select value={props.value} onChange={props.input}>
              <option value="in">India</option>
              <option value='us'>U.S.A</option>
            </select>
          </label> */}
        {/* <input type="submit" value="submit"/> */}
        {/* </form> */}
      </ul>
    </div>
  );
}

export default Header;
