import React from 'react';
import NewPaymentPanel from './NewPaymentPanel';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class NewPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: props.addNew,
      editPay: props.editPay,
      payDetails: props.payDetails
    }
  }
  render() {
    let detailsPanel = this.props.addNew || this.props.editPay ? <NewPaymentPanel cancel = {this.props.cancel} payDetails = {this.props.payDetails} addNewPay={this.props.addNewPay} addNew={this.props.addNew} editPay = {this.props.editPay} updatePay = {this.props.updatePay}/> : null;
    return (
      <div>
        <Button variant="primary" size="sm" type='button' onClick={this.props.addPay}>
          Add <FontAwesomeIcon icon={faCartPlus} />
        </Button>
        {detailsPanel}
      </div>
    );
  }
};
