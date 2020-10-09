import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({ // material-ui の見た目をカスタマイズする
  root: {
    
  },
}));

const Answer = (contentOf) => {
  // const classes = useStyles();

  return(
    <Button variant="contained" color="primary">
      {contentOf.content}
    </Button>
  )
}

export default Answer