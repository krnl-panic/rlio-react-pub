import 'antd/dist/antd.dark.css'
import React from 'react'
import {hydrateRoot, createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App/App'
import {loadableReady} from '@loadable/component'
import isNil from 'lodash/isNil'
import Helmet from 'react-helmet'

const createRootFn = (
  element: HTMLElement,
  component: React.ReactChild | Iterable<React.ReactNode>,
) => {
  const root = createRoot(element)
  root.render(component)
}

const renderApp = () => {
  const rootContent = document.getElementById('root')
  const renderMethod = module.hot ? createRootFn : hydrateRoot

  if (!isNil(rootContent)) {
    renderMethod(
      rootContent as HTMLElement,
      <BrowserRouter>
        <Helmet bodyAttributes={{style: 'background-color : #24292e'}} />
        <App />
      </BrowserRouter>,
    )
  }
}

loadableReady(() => {
  renderApp()
})

if (module.hot) {
  module.hot.accept()
}
