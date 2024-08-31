import React, { Component } from "react";
import Columonone from "./Columonone";

import footerDataSections from "../../../assets/Datafoot";
class Footerlinkwrapper extends Component {
  render() {
    return (
      <>
        <div className="footer-links-wrapper row">
          {footerDataSections.map((section, i) => {

            return <div className={`links-wrapper- ${i + 1} col-sm-12 col-md`} key={i}>
              <Columonone data={section}/>
            </div>;
          })}
        </div>
    
      </>
    );
  }
}
export default Footerlinkwrapper;
