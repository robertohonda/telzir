import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'

export const renderRoutes = (routes) => {
  return (
    <Switch>
      {routes.map(({ routes, component: Component, ...route }, index) => {
        return (
          <Route
            key={index}
            {...route}
            render={(props) => (
              <Component
                {...props}
                routes={routes}
                renderRoutes={renderRoutes}
              />
            )}
          />
        )
      })}
    </Switch>
  )
}
