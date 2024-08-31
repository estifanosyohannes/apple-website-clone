import { Component } from "react";
import Headerlink from "./HeaderLink/Headerlink";
import datahead from "../../assets/Datahead";
import applelogo from "../../commonResource/images/icons/logo-sm.png";

class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={applelogo} alt="" />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {datahead.map((elements, i) => {
                  return (
                    <li key={i} className="nav-item">
                      <Headerlink data={elements} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;

{
  /* <li className="nav-item">
  <a className="nav-link js-scroll-trigger" href="#">
    iphone
  </a>
</li> */
}
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <div className="nav-wrapper fixed-top">
//             <div className="container">
//               <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//                 <button
//                   className="navbar-toggler navbar-toggler-right"
//                   type="button"
//                   data-toggle="collapse"
//                   data-target=".navbar-collapse"
//                 >
//                   ☰
//                 </button>
//                 <a className="navbar-brand mx-auto" href="#">
//                   <img src={applelogo} />
//                 </a>

//                 <div className="navbar-collapse collapse">
//                   <ul className="navbar-nav nav-justified w-100 nav-fill">
//                     {datahead.map(function (obj) {
//                       return (
//                         <Headerlink
//                           link_url={obj.link_url}
//                           link_name={obj.link_name}
//                         />
//                       );
//                     })}

//                 < HeadIcon />
//                   </ul>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

{
  /* <li className="nav-item">
  <a className="nav-link js-scroll-trigger" href="/search/">
    <img src={searchlogo} />
  </a>
</li>
<li className="nav-item">
  <a className="nav-link js-scroll-trigger" href="/cart/">
    <img src={cartlogo} />
  </a>
</li> */
}

{
  /* <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/mac/">
                        Mac
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        iphone
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        ipad
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        watch
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        tv
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        Music
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        Support
                      </a>
                    </li> */
}

{
  /* <Headerlink linkurl={"/mac"} lname={"Mac"} />
                    <Headerlink linkurl={"/Iphone"} lname={"Iphone"} />
                    <Headerlink linkurl={"/Ipad"} lname={"Ipad"}/>
                    <Headerlink linkurl={"/Watch"} lname={"Watch"} />
                    <Headerlink linkurl={"/Tv"} lname={"Tv"} />
                    <Headerlink linkurl={"/Music"} lname={"Music"} />
                    <Headerlink linkurl={"/Support"} lname={"Support"} /> */
}
