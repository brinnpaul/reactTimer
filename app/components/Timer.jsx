let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');

let Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount });
    }, 1000)
  },
  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus})
  },
  render: function() {
    let {count, timerStatus} = this.state;
    let renderControlArea = () => {
      return <Controls
              countdownStatus={timerStatus}
              onStatusChange={this.handleStatusChange}
              timer={true}/>
    };
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;