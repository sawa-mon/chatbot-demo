import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ( // material-ui の見た目をカスタマイズする
    createStyles({
      "button": {
        borderColor: '#FFB549',
        color: '#FFB549',
        fontWeight: 600,
        marginBottom: '8px',
        "&:hover": {
          backgroundColor: '#FFB549',
          color: '#fff'
        }
      }
    })
));

const Answer = (contentOf) => {
  const classes = useStyles();

  return(
    <Button
      className={classes.button}
      variant="outlined" onClick={() => contentOf.select(contentOf.content, contentOf.nextId)}
    >
      {contentOf.content}
    </Button>
  )
}

export default Answer