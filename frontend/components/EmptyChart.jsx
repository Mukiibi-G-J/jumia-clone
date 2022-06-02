import {
  Card,
  Button,
  Typography,
  Grid,
  makeStyles,
  Link,
} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    flex: 'column',
    justifyItems: 'center',
    margin: '0 auto',
  },
  main: {
    paddingLeft: '400px',
    paddingRight: '400px',
    paddingTop: '100px',
    paddingBlock: '100px',
  },
  space: {
    marginTop: '20px',
  },
}));

const EmptyChart = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item md={12} className={classes.root}>
          <Card className={classes.main}>
            <Image src="/images/cart.svg" height={150} width={150} />
            <Typography className={classes.space}>
              Your Chart is empty
            </Typography>
            <Typography className={classes.space}>
              Browse our categories and discover our best deals!
            </Typography>
            <Link href="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.space}
              >
                Start Shopping
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmptyChart;
