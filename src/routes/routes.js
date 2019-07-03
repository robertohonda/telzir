import Layout from '../views/Layout/'
import Home from '../views/Home'

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
    ],
  },
]

export default routes
