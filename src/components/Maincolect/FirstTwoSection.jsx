import React, { Component } from "react";

class FirstTwoSection extends Component {
  render() {
    return (
      <div>
        <section className={this.props.wrapper}>
          <div className="container">
            <div className="new-alert">New</div>
            <div className="title-wraper bold black">{this.props.title}</div>
            {this.props.desctiption && (
              <div className="description-wrapper black">
                Twice the speed. Twice the storage.
              </div>
            )}
            {this.props.pricetag && (
              <div className="price-wrapper grey">From $999.</div>
            )}
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
            {this.props.ipodcaption && (
              <div className="ipod-caption row">
                <div className="col-sm-12 col-md-6 text-md-right">
                  {this.props.ipodcaption}
                </div>
                <div className="col-sm-12 col-md-6 text-md-left">
                  {this.props.Magic}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default FirstTwoSection;
