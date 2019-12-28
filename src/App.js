import React from 'react';
import './App.css';
import NewPayment from './components/NewPayment';
import PayList from './components/PayList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

let payList = [], index = 1;
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      payList: payList,
      addNew: false,
      editPay: false,
      payDetails: {
        name: '',
        amount: '',
        date: '',
        details: '',
        id: 0
      }
    }
  }

  addNewPay = pay => {
    this.setState(prevState => {
      pay.id = index++
      return {
        payList: prevState.payList.concat(pay)
      }
    })
  }

  addPay = () => {
    this.setState({
      addNew: true,
      editPay: false,
      payDetails: {
        name: '',
        amount: '',
        date: '',
        details: '',
        id: 0
      }
    });
  }

  deletePay = index => {
      this.setState(prevState => {
        return {
          payList: prevState.payList.filter(item => {
            return item.id !== index
          })
        }
      })
      this.cancel();
  }

  updatePay = pay => {
    this.setState(prevState => {
      return {
        payList: prevState.payList.map(item => {
          if(pay.id === item.id) {
            return pay
          } else {
            return item
          }
        })
      }
    })
    this.cancel();
  }

  editPayDetails = pay => {
    this.setState(prevState => {
      return {
        editPay: true,
        addNew: false,
        payDetails: pay
      }
    });
  }

  cancel = () => {
    this.setState({
      addNew: false,
      editPay:false,
      payDetails: {
        name: '',
        amount: '',
        date: '',
        details: '',
        id: 0
      }
    });
  }

  render () {
    return (
      <div>
        <h1 className="App-header">
          Payment Inventory
        </h1>
        <NewPayment addNewPay = {this.addNewPay} addNew={this.state.addNew} addPay = {this.addPay} updatePay={this.updatePay} editPay={this.state.editPay} cancel = {this.cancel} payDetails = {this.state.payDetails}/>
        <PayList payList = {this.state.payList} editPay={this.editPayDetails} deletePay={this.deletePay}/>
      </div>
    );
  }

}
