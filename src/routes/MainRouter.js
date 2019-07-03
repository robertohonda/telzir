import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import routes from './routes'
import { renderRoutes } from './renderRoutes'

const MainRouter = () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>

export default MainRouter
