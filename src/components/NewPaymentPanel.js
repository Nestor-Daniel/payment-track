import React from 'react';
import {Button, Form} from 'react-bootstrap';

export default class NewPaymentPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.payDetails
  }
  saveData = () => {
    let pay = this.state;
    this.props.addNewPay(pay);
    this.props.cancel()
  }
  setValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  updatePay = () => {
    this.props.updatePay(this.state)
  }
  componentDidUpdate(prevProps) {
      if(this.props.payDetails !== prevProps.payDetails) {
        this.setState(this.props.payDetails)
      }
  }
  render() {
    let saveBtn = this.props.addNew ? <Button variant="success" size="sm" type='submit' onClick={this.saveData}>Save</Button> : null,
        updateBtn =  this.props.editPay ? <Button variant="success" size="sm" type='submit' onClick={this.updatePay}>Update</Button> : null;
    return (
      <Form className = 'bookDetails'>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Name' name='name' value={this.state.name} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Amount' name='amount' value={this.state.amount} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Date' name='date' value={this.state.date} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Details' name='details' value={this.state.details} onChange={this.setValue}/>
        </Form.Group>
        {saveBtn} {updateBtn}
        <Button variant="secondary" size="sm" type='button' onClick={this.props.cancel}>Cancel</Button>
      </Form>
    );
  }
}
