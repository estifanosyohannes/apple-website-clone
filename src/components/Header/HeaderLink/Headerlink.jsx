import React, { Component } from "react";
// import cartlogo from "../../../commonResource/images/icons/cart-sm.png";
// import searchlogo from "../../../commonResource/images/icons/search-icon-sm.png";
class Headerlink extends Component {
  render() {
    const { link_url, link_name, img } = this.props.data;
    return (
      <>
        {!img ? (
          <a className="nav-link js-scroll-trigger" href={link_url}>
            {link_name}
          </a>
        ) : (
          <a className="nav-link js-scroll-trigger" href={link_url}>
            <img src={img} alt="Image Not" />
          </a>
        )}
    
      </>
    );
  }
}
export default Headerlink;

// return (
//   <div>
//     <li className="nav-item">
//       !img? :

//       <a className="nav-link js-scroll-trigger" href={link_url}>
//         {link_name}

//       </a>
//     </li>
//   </div>
// );
