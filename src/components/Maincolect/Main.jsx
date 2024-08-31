import { Component } from "react";
import watchlogo from "../../commonResource/images/icons/watch-series5-logo.png";
import bankerimg from "../../commonResource/images/home/banker.png";
import appletvlogo from "../../commonResource/images/icons/apple-tv-logo.png";
import arcadelogo from "../../commonResource/images/icons/arcade.png";
import FirstTwoSection from "./FirstTwoSection";

import Appleyoutube from "../YOUTUBE//Appleyoutube"
class Main extends Component {
  render() {
    return (
      <div>
        <section class="alert-section top-50">
          <div class="container">
            <div class="alert-title">We’re open for you.</div>
            <div class="alert-text">
              Our retail stores are closed, but you can buy our products here
              online and get fast, free delivery. If you need help finding the
              right product or have a question on your order, chat online with a
              Specialist or call 1-800-MY-APPLE.
              <br />
              For service and support, visit{" "}
              <a href="https://support.apple.com/">support.apple.com</a>.
            </div>
          </div>
        </section>

        <FirstTwoSection
          wrapper="first-hightlight-wrapper"
          title="iPad Pro"
          ipodcaption="iPad Pro available starting 3.25"
          Magic="Magic Keyboard coming in May"
        />
        <FirstTwoSection
          wrapper="second-hightlight-wrapper"
          title="MacBook Air"
          desctiption="Twice the speed. Twice the storage."
          pricetag="From $999."
        />

        <section className="third-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper bold">iPhone 11 Pro</div>

            <div className="description-wrapper">
              Pro cameras. Pro display. Pro performance.
            </div>

            <div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
            </div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="title-wraper">iPhone 11</div>
                  <div className="description-wraper">
                    Just the right amount of everything.
                  </div>
                  <div className="price-wrapper">
                    From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                  </div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Apply now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper white">
                    Get the latest CDC response to COVID-19.
                  </div>

                  <div className="links-wrapper white">
                    <ul>
                      <li>
                        <a href="">Watch the PSA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={appletvlogo} />
                    </div>
                  </div>

                  <div className="tvshow-logo-wraper">
                    <img src={bankerimg} />
                  </div>

                  <div className="watch-more-wrapper">
                    <a href="#">Watch now on the Apple TV App</a>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={watchlogo} />
                    </div>
                  </div>
                  <div className="description-wraper">
                    With the Always-On Retina display.
                    <br />
                    You’ve never seen a watch like this.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sixth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={arcadelogo} />
                    </div>
                  </div>
                  <div className="description-wraper white">
                    Agent 8 is a small hero on a big mission.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">
                          Play now<sup>2</sup>
                        </a>
                      </li>
                      <li>
                        <a href="">Learn about Apple Arcade</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper">
                    Apple Card Monthly Installments
                  </div>
                  <div className="description-wraper">
                    Pay for your next iPhone over time, interest-free with Apple
                    Card.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Apply now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* APPLE COMPONENT  */}
        <section>
          <Appleyoutube />
        </section>
      </div>
    );
  }
}

export default Main;














