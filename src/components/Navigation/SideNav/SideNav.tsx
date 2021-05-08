import React, { useEffect, useState } from 'react'
import { useGQL } from 'contexts/GraphQL/GQLProvider'
import {
  Grid,
  List,
  ListItem,
  ListSubheader,
  ListItemText
} from '@material-ui/core'

const SideNav = ({ query }: { query: string }) => {
  const { GraphQL } = useGQL()

  const [data, setData] = useState<any>({})

  useEffect(() => {
    const getData = async () => {
      const res = await GraphQL.request(query)
      setData(res)
    }
    getData()
  }, [])

  return (
    <Grid container justify="center">
      <List component="nav" dense>
        {data.chapters &&
          data.chapters.map((chapter: any, index: number) => {
            return (
              <>
                <ListItem key={index}>
                  <ListItemText
                    primary={chapter.title}
                    secondary={chapter.subtitle}
                  />
                </ListItem>
                {chapter.sections.map((section: any, index: number) => {
                  return (
                    <List
                      key={index}
                      dense
                      component="div"
                      style={{ marginLeft: 15 }}
                    >
                      <ListItem>
                        <ListItemText primary={section.title} />
                      </ListItem>
                    </List>
                  )
                })}
              </>
            )
          })}
      </List>
    </Grid>
  )
}

export default SideNav
