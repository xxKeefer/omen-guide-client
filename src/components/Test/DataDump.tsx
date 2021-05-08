import React, { useEffect, useState } from 'react'
import {
  Article,
  ChapterHeader,
  SectionHeader
} from 'components/Layout/exports'
import { Paper, Box } from '@material-ui/core'
import { useGQL } from 'contexts/GraphQL/GQLProvider'
import LayoutStyles from '../Layout/styles/LayoutStyles'

const DataDump = ({ query }: { query: string }) => {
  const { GraphQL } = useGQL()
  const classes = LayoutStyles()

  const [data, setData] = useState<any>({})

  useEffect(() => {
    const getData = async () => {
      const res = await GraphQL.request(query)
      setData(res)
    }
    getData()
  }, [])

  return (
    <Box className={classes.content}>
      {data.chapters &&
        data.chapters.map((chapter: any, index: number) => {
          return (
            <Paper
              key={`Ch-${index}`}
              className={classes.chapter}
              elevation={0}
              square
            >
              <ChapterHeader
                title={chapter.title}
                subtitle={chapter.subtitle}
              />
              {chapter.sections.map((section: any, index: number) => {
                return (
                  <Box key={`Se-${index}`} className={classes.section}>
                    <SectionHeader
                      title={section.title}
                      subtitle={section.subtitle}
                    />
                    {section.articles.map((article: any, index: number) => {
                      return (
                        <Box key={`Ar-${index}`} className={classes.article}>
                          <Article body={article.body} />
                        </Box>
                      )
                    })}
                  </Box>
                )
              })}
            </Paper>
          )
        })}
    </Box>
  )
}

export default DataDump
