import { makeStyles } from '@material-ui/core/styles'

const LayoutStyles = makeStyles(({ palette }) => ({
  content: { textAlign: 'justify', margin: 35 },
  chapter: {
    padding: '0px 60px',
    marginBottom: 40,
    borderColor: palette.primary.main,
    border: '1px solid',
    borderLeft: '15px solid',
    '&:hover': {
      borderColor: palette.primary.dark
    }
  },
  section: {
    padding: '10px 20px',
    marginBottom: 20,
    borderColor: palette.secondary.main,
    border: '1px solid',
    borderLeft: '15px solid',
    '&:hover': {
      borderColor: palette.secondary.dark
    }
  },
  article: {
    padding: '10px 20px',
    marginBottom: 20,
    borderColor: palette.secondary.main,
    borderTop: '1px solid',
    '&:hover': {
      borderColor: palette.secondary.dark
    }
  },
  title: { textAlign: 'left', marginRight: '100px' },
  subtitle: {
    fontFamily: 'Kanit',
    fontWeight: 200,
    marginBottom: 20
  }
}))

export default LayoutStyles
