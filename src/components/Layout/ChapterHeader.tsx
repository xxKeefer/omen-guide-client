import React from 'react'
import { Typography } from '@material-ui/core'

type HeaderVars = { title: string; subtitle: string }

const ChapterHeader = ({ title, subtitle }: HeaderVars) => {
  return (
    <>
      <div style={{ margin: '10px 0px', border: 'solid 2px #e2e2e2' }}></div>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
    </>
  )
}

export default ChapterHeader
