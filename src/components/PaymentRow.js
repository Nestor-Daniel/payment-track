import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class PaymentRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = props.payment;
  }
  deleteRow = () => {
    this.props.deletePay(this.state.id)
  }
  editPay = () => {
    this.props.editPay(this.state)
  }
  componentDidUpdate(prevProps) {
      if(this.props.payment !== prevProps.payment) {
        this.setState(this.props.payment)
      }
  }
  render(){
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.amount}</td>
        <td>{this.state.date}</td>
        <td>{this.state.details}</td>
        <td><Button variant="danger" size="sm" index = {this.state.id} onClick = {this.deleteRow}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button></td>
        <td><Button variant="primary" size="sm" onClick = {this.editPay}>
          <FontAwesomeIcon icon={faEdit} />
        </Button></td>
      </tr>
    )
  }
}
