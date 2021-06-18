import * as React from "react"
import { Link } from "gatsby"
import logo from "../../../images/Logo.png"
import "./Header.css"

const Header = () => (
  <div className="header">
    <div className="header-group">
      <Link to="/">
        <img src={logo} alt="Logo" width="30" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
