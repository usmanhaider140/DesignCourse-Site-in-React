import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Link } from "gatsby"
import Header from "./Header/Header"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learning to Design and Code in React</h1>
          <p>
            Complete courses about the best tools and design systems. Prototypes
            and build apps with React and Node Js
          </p>
          <Link to="/page-2/">Watch the Video</Link>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
