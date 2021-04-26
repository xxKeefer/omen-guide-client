import React from 'react'
import { Typography } from '@material-ui/core'

type ArticleVars = { body: string }
const Article = ({ body }: ArticleVars) => {
  return (
    <div style={{ padding: 10 }}>
      {body ? (
        <Typography variant="body1">{body}</Typography>
      ) : (
        <Typography variant="h6">Article not written yet</Typography>
      )}
    </div>
  )
}

export default Article
