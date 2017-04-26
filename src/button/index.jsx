import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'danger']),
    size: PropTypes.oneOf(['normal', 'small']),
    shape: PropTypes.oneOf(['circle']),
    icon: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const checked = !this.state.checked;
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.setState({ checked });
  }

  render() {
    const { type, disabled, size, shape, icon } = this.props;
    const otherProps = this.state.checked ? { 'data-role': 'checked'} : {};
    return (
      <button
        type="button"
        className={classNames('dh-btn', {
          [`dh-btn-${type}`]: type,
          [`dh-btn-${size}`]: size,
          [`dh-btn-${shape}`]: shape
        })}
        disabled={disabled}
        onClick={this.handleClick}
        {...otherProps}
      >
      {
        !shape && icon ? (<Icon type={icon} />) : null
      }
      {
        shape ? (<Icon type={icon} />) : (<span>{this.props.children}</span>)
      }
      </button>
    )
  }
}
export default Button;
