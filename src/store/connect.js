import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import StoreContext from '../Provider'
import useForceUpdate from '../hooks/useForceUpdate'

export default (mapStateToProps, mapDispatchToProps) => Component => {
  return (props) => {
    const forceUpdate = useForceUpdate()

    const handleChange = () => {
      forceUpdate()
    }

    useEffect(() => {
      const unsubscribe = store.subscribe(handleChange)

      return () => {
        unsubscribe()
      }
    })

    const store = useContext(StoreContext)
    return (
      <Component
        {...props}
        {...mapStateToProps(store.getState(), props)}
        {...mapDispatchToProps(store.dispatch, props)}
      />
    )

  }
}

