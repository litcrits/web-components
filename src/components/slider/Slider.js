import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SliderStyle from './Slider.style';

function Slider({ markIndex, onChangeIndex, points }) {
  const [dragMode] = React.useState(false);
  const pointsRef = React.useRef();
  const pointRefs = points.map(() => React.useRef());

  function handleMouseDown(e) {
    handleChange(e);
    document.addEventListener('mousemove', handleChange);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseUp() {
    unbindEventListeners();
  }

  function unbindEventListeners() {
    document.removeEventListener('mousemove', handleChange);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleChange(e) {
    const containerWidth = pointsRef.current.clientWidth;
    const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
    let left = x - (pointsRef.current.getBoundingClientRect().left + window.pageXOffset);

    if (left < 0) {
      left = 0;
    } else if (left > containerWidth) {
      left = containerWidth;
    }

    let totalWidth = 0;
    points.forEach((point, index) => {
      const currentWidth = totalWidth;
      totalWidth += pointRefs[index].current.clientWidth;
      if (left > currentWidth && left <= totalWidth) {
        onChangeIndex(index);
      }
    });
  }

  return (
    <SliderStyle className="slider">
      <div className="track">
        <div className="points" ref={pointsRef}>
          {points.map((point, index) => {
            const circleClasses = classnames({
              'point-circle': true,
              mark: index === markIndex && !dragMode
            });

            return (
              <div
                key={index}
                className="point"
                onMouseDown={handleMouseDown}
                onTouchMove={handleChange}
                onTouchStart={handleChange}
                ref={pointRefs[index]}
              >
                <div className={circleClasses}/>
                <div className="point-label">{point.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SliderStyle>
  );
}

Slider.propTypes = {
  markIndex: PropTypes.number,
  onChangeIndex: PropTypes.func,
  points: PropTypes.array
};

Slider.defaultProps = {
  markIndex: 1,
  onChangeIndex: () => {},
  points: []
};

export default Slider;
