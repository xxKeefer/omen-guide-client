import React from 'react'
import { Typography } from '@material-ui/core'
import LayoutStyles from './styles/LayoutStyles'

type HeaderVars = { title: string; subtitle: string }

const SectionHeader = ({ title, subtitle }: HeaderVars) => {
  const classes = LayoutStyles()
  return (
    <>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        {subtitle}
      </Typography>
    </>
  )
}

export default SectionHeader
