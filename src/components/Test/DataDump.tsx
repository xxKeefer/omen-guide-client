import React, { useEffect, useState } from 'react'
import { Article, ChapterHeader, SectionHeader } from '../Layout/exports'
import { useGQL } from '../../contexts/GraphQL/GQLProvider'

const DataDump = ({ query }: { query: string }) => {
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
    <div
      style={{ textAlign: 'justify', backgroundColor: 'white', padding: 35 }}
    >
      {data.chapters &&
        data.chapters.map((chapter: any, index: number) => {
          return (
            <div
              key={`Ch-${index}`}
              style={{ marginBottom: 40, borderTop: 'solid 4px #e2e2e2' }}
            >
              <ChapterHeader
                title={chapter.title}
                subtitle={chapter.subtitle}
              />
              {chapter.sections.map((section: any, index: number) => {
                return (
                  <div
                    key={`Se-${index}`}
                    style={{
                      margin: '0 0 40px 60px',
                      paddingLeft: 20,
                      borderLeft: '2px solid #ddd'
                    }}
                  >
                    <SectionHeader
                      title={section.title}
                      subtitle={section.subtitle}
                    />
                    {section.articles.map((article: any, index: number) => {
                      return (
                        <div
                          key={`Ar-${index}`}
                          style={{ margin: '0 0 60px 40px' }}
                        >
                          <Article body={article.body} />
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default DataDump
