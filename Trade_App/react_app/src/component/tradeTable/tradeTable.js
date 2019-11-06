import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core/'
import PropTypes from 'prop-types';

export default function TradeTable(props) {
const classes = useStyles();
const tradeData = props.props;
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}
      size="small"
      aria-label="a dense table">
       <TableHead className={classes.tableHead}>
         <TableRow>
            <TableCell  className={classes.header}>Trade Id</TableCell>
            <TableCell  className={classes.header}>Trade Date</TableCell>
            <TableCell  className={classes.header}>Trade Amount</TableCell>
            <TableCell  className={classes.header}>Trade State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          tradeData[0]!==""?
          (tradeData[0].map(value=>(
           <TableRow key={value.tradeId}>
            <TableCell>{value.tradeId}</TableCell>
              <TableCell>{value.tradeDate}</TableCell>
              <TableCell>{value.tradeAmount}</TableCell>
              <TableCell>{value.tradeState}</TableCell>
           </TableRow>
          ))):null}
        
        </TableBody>
      </Table>
      </Paper>
 );
} 
TradeTable.propTypes = {
  props: PropTypes.array
};
const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    display:'flex',
  },
  table: {
    minWidth: '100px',
    height:'120px',
    borderWidth:'0px',
    borderCollapse:'collapse',
    
  },
  tablecell:{
  fontSize:'small',
   },
  header:{
    fontSize:'smaller',
    fontWeight:'600',
    backgroundColor:'white',
  }
}));

