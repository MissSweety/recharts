/**
 * @fileOverview Dot
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';

@pureRender
class Dot extends Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  render() {
    const { cx, cy, r, className } = this.props;
    const layerClass = classNames('recharts-dot', className);

    if (cx === +cx && cy === +cy && r === +r) {
      return (
        <circle
          {...getPresentationAttributes(this.props)}
          {...filterEventAttributes(this.props)}
          className={layerClass}
          cx={cx}
          cy={cy}
          r={r}
        />
      );
    }

    return null;
  }
}

export default Dot;
