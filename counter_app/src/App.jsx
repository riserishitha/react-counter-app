import { Component } from "react";
import "./app.css";

class Count extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    let addBtn = {
      count: this.state.count + 1,
    };
    this.setState(addBtn);
  };

  decrease = () => {
    // Check if the current count is greater than 0 before decrementing
    if (this.state.count > 0) {
      let subBtn = {
        count: this.state.count - 1,
      };
      this.setState(subBtn);
    }
  };

  restart = () => {
    let restartBtn = { count: 0 };
    this.setState(restartBtn);
  };

  render() {
    return (
      <div className="main">
        <h1 className="heading">COUNTER APP</h1>
        <div className="process">{this.state.count}</div>
        <div className="body">
          <div>
            <button onClick={this.increase} className="plus">
              +
            </button>
          </div>
          <div>
            <button onClick={this.decrease} className="minus">
              -
            </button>
          </div>
          <div>
            <button onClick={this.restart} className="alltheway">
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Count;
