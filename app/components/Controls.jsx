let React = require('react');

let Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    let {countdownStatus, timer} = this.props;
    let renderStartStop = () => {
      let button;
      if (countdownStatus==='started') {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (countdownStatus==='paused') {
        return (
          <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    };
    let renderBeginTimer = () => {
      if (timer && countdownStatus==="stopped") {
        return <button className="button expanded" onClick={this.onStatusChange('started')}>Start</button>
      }
    };
    let renderClearButton = () => {
      if (countdownStatus!=="stopped") {
        return <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      }
    };
    return (
      <div className="controls">
        {renderBeginTimer()}
        {renderStartStop()}
        {renderClearButton()}
      </div>
    );
  }
});

module.exports = Controls;