import React from 'react'
import { Helmet } from 'react-helmet-async'
import { APP_INFO } from '../constants/app'

type AppTitleProps = {
  title?: string
}

const titlePostfix = APP_INFO.name

const AppTitle = ({ title }: AppTitleProps) => {

  return (
    <Helmet>
      <title>{title ? `${title} - ${titlePostfix}` : titlePostfix}</title>
    </Helmet>
  )
}

export default AppTitle