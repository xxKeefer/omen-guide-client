import React from 'react'
import { Typography } from '@material-ui/core'

type HeaderVars = { title: string; subtitle: string }

const SectionHeader = ({ title, subtitle }: HeaderVars) => {
  return (
    <>
      <div style={{ margin: '10px 0px' }}></div>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h5">{subtitle}</Typography>
    </>
  )
}

export default SectionHeader
