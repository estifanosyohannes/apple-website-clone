import React, { Component } from "react";

class Columonone extends Component {
  render() {
    // console.log(this.props.data);
    return (
      <>
        {this.props.data.map((ele, i) => (
          <div key={i}>
            <h3>{ele.title}</h3>
            <ul >
              {ele.links.map(({ text, url }, i) => {
                return (
                  <li key={i}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </>
    );
  }
}

export default Columonone;
