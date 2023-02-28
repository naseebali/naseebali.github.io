import React from 'react'
import PropTypes from 'prop-types'
import icons from './iconName'

const Icon = ({ icon, className, color, width, height, rotate, fill }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
      transform: `rotate(${rotate}deg)`,
      color: `${color ? color : 'inherit'}`,
    },
  }
  return (
    <svg
      aria-hidden={true}
      width={width}
      height={height}
      // viewBox={`0 0 50 50`}
      // viewBox={`0 -3 10 25`}Naseeb
      // viewBox={`10 -3 5 30`}
      style={styles.svg}
      fill="none"
      className={className}
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={icons[icon]}
        fill={fill ? fill : 'currentColor'}
      />
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  rotate: PropTypes.number,
}

Icon.defaultProps = {
  // size: 24,
  color: 'white',
}

export default Icon
