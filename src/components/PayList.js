import React from 'react';
import PaymentRow from './PaymentRow';
import {Table} from 'react-bootstrap';

export default class PayList extends React.Component{
  render() {
    let payments = this.props.payList.map(pay => {
      return (
        <PaymentRow key = {pay.id} payment = {pay} deletePay={this.props.deletePay} editPay = {this.props.editPay}/>
      )
    })
    return (
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Details</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody className='scrollableTable'>{payments}</tbody>
      </Table>
    )
  }
};
