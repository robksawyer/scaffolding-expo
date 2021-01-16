/**
 * @file {{name}}.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const {{name}} = (props) => {
  const {
    tagName: Tag = View,
    children = '',
  } = props

  return (
    <Tag
      style={{
        bgColor: 'black'
      }}
    >
      {children}
    </Tag>
  )
}

{{name}}.propTypes = {
  tagName: PropTypes.element,
  children: PropTypes.node,
}

export default {{name}}
