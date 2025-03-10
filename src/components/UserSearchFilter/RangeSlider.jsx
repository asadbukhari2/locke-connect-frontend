import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

const { Range } = Slider;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };

const RangeSlider = () => (
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider min={0} max={20} defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Reversed Slider with custom handle</p>
      <Slider min={0} max={20} reverse defaultValue={3} handle={handle} />
    </div>
    <div style={wrapperStyle}>
      <p>Slider with fixed values</p>
      <Slider
        min={20}
        defaultValue={20}
        marks={{ 20: 20, 40: 40, 100: 100 }}
        step={null}
      />
    </div>
    <div style={wrapperStyle}>
      <p>Range with custom tooltip</p>
      <Range
        min={0}
        max={20}
        defaultValue={[3, 10]}
        tipFormatter={(value) => `${value}%`}
      />
    </div>
  </div>
);
export default RangeSlider;
