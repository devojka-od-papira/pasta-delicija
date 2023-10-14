import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../view/home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
])

export default router
