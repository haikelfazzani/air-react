import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function Slider ({
  onChangeEnd,
  onChange,
  direction = 'horizontal',
  defaultValue = 0,
  min = 0,
  max = 100,
  color = '#3182ce'
}) {


  const sliderRef = useRef(null);
  const handlerRef = useRef(null);
  const [size, setSize] = useState(defaultValue);
  const isHr = direction === 'horizontal';

  useEffect(() => {
    let parent = sliderRef.current,
      handler = handlerRef.current,
      isMouseOn = false,
      offset = 0,
      handlerSize = 0, // current handler width/height in percent
      sizeDir = isHr ? 'left' : 'bottom';

    let parentRect = parent.getBoundingClientRect(),
      handlerRect = handler.getBoundingClientRect(),
      offsetSize = isHr ? handlerRect.width / 2 : handlerRect.height / 2;

    handler.style[sizeDir] = `calc(${defaultValue}% - ${offsetSize}px)`;

    const onMouseDown = (e) => {
      isMouseOn = true;
      handlerRect = handler.getBoundingClientRect();

      offset = isHr
        ? handler.offsetLeft - e.clientX + offsetSize
        : handler.offsetTop - e.clientY + offsetSize;

      window.addEventListener('mouseup', onMouseUp, false);
      window.addEventListener('mousemove', onMouseMove, false);
    }

    const onClick = (e) => {
      isMouseOn = false;
      parentRect = parent.getBoundingClientRect();

      handlerSize = isHr
        ? Math.ceil((e.clientX - parentRect.x) / parent.offsetWidth * 100)
        : Math.ceil((parentRect.bottom - e.clientY) / parent.offsetHeight * 100);

      if (handlerSize >= min && handlerSize <= max) {
        handler.style[isHr ? 'left' : 'bottom'] = `calc(${handlerSize}% - ${offsetSize}px)`;
        setSize(handlerSize);
        if (onChangeEnd) {
          onChangeEnd(handlerSize);
        }
        if (onChange) {
          onChange(handlerSize);
        }
      }
    }

    const onMouseUp = () => {
      isMouseOn = false;
      handlerSize = handlerSize > 100 ? 100 : handlerSize < min ? 0 : handlerSize;

      if (onChangeEnd) { onChangeEnd(handlerSize); }

      window.removeEventListener('mouseup', onMouseUp, false);
      window.removeEventListener('mousemove', onMouseMove, false);
    }

    const onMouseMove = (e) => {
      if (isMouseOn) {
        handlerSize = isHr
          ? parseInt((e.clientX + offset) / parent.offsetWidth * 100, 10)
          : parseInt((parent.offsetHeight - (e.clientY + offset)) / parent.offsetHeight * 100, 10);

        if (handlerSize >= min && handlerSize <= max) {
          handler.style[sizeDir] = `calc(${handlerSize}% - ${offsetSize}px)`;
          setSize(handlerSize);
          if (onChange) {
            onChange(handlerSize);
          }
        }
      }
      e.preventDefault();
    }

    handler.addEventListener('mousedown', onMouseDown, false);
    parent.addEventListener('click', onClick);

    return () => {
      handler.removeEventListener('mousedown', onMouseDown, false);
      parent.removeEventListener('click', onClick);
    }
  }, []);

  return <div tabIndex="-1" className="slider" ref={sliderRef} style={{
    [isHr ? 'width' : 'height']: '100%'
  }}>

    <div className="slider-rail" style={{
      height: isHr ? '4px' : '100%',
      width: isHr ? '100%' : '4px'
    }}>

      <div style={{
        backgroundColor: color,
        position: 'absolute',
        height: isHr ? '100%' : size + '%',
        width: isHr ? size + '%' : '100%',
        [isHr ? 'left' : 'bottom']: '0'
      }}>
      </div>
    </div>

    <div tabIndex="0" className="slider-handler" ref={handlerRef} style={{
      [isHr ? 'marginTop' : 'marginLeft']: '-5px'
    }}></div>
  </div>
}
