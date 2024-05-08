import React, { useState, useContext } from 'react';
import axios from 'axios';
import { IOrder } from '../../interfaces/IOrder';
import { IUser } from '../../interfaces/IUser';
import { UserContext } from '../../App';
import { Button, InputGroup, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';
import './OrderForm.css';

const OrderForm: React.FC = () => {
  const { userId } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [shippingStreetAddress, setShippingStreetAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingZipCode, setShippingZipCode] = useState('');
  const [billingStreetAddress, setBillingStreetAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingCountry, setBillingCountry] = useState('');
  const [billingZipCode, setBillingZipCode] = useState('');

  // validate if shipping/billing address is empty

  // const handl

  // const handleInput
  // patch request to update order status
  // PATCH /users/{userID}/orders/checkout
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const shipToAddress = '123 Main St, Anytown, USA 12345';
    const billAddress = '123 Main St, Anytown, USA 12345';

    axios.patch(`${process.env.REACT_APP_API_URL})/users/${userId}/orders/checkout`, {
      status: 'Approved',
      shipToAddress,
      billAddress
    })
      .then(response => { console.log(response); })
      .catch(error => { alert(error) });
}

  // send address as a string

  // display error if quantity requested > stock
  // display error if session user != {userID} in request URL

  // <div>Shipping Information
  //   <input>First Name</input>
  //   <input>Last Name</input>
  //   <input>Street Address</input>
  //   <input>City</input>
  //   <input>State</input>
  //   <input>Country</input>
  //   <input>Zip Code</input>
  // </div>

  // {/* doesn't do anything, for display only */}
  // <div>Billing Information
  //   <input>Card Number</input>
  //   <input>Name on Card</input>
  //   <input>Expiration Date</input>
  //   <input>Security Code</input>
  //   <p>**same as shipping info button</p>
  //   <input>Street Address</input>
  //   <input>City</input>
  //   <input>State</input>
  //   <input>Country</input>
  //   <input>Zip Code</input>
  // </div>

  // <button>Submit</button>
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Shipping Information</FormLabel>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Street Address"
              aria-label="Street Address"
              aria-describedby="basic-addon1"
              onChange={(e) => setShippingStreetAddress(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="City"
              aria-label="City"
              aria-describedby="basic-addon1"
              onChange={(e) => setShippingCity(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="State"
              aria-label="State"
              aria-describedby="basic-addon1"
              onChange={(e) => setShippingState(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Country"
              aria-label="Country"
              aria-describedby="basic-addon1"
              onChange={(e) => setShippingCountry(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Zip Code"
              aria-label="Zip Code"
              aria-describedby="basic-addon1"
              onChange={(e) => setShippingZipCode(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Button onClick={handleCopyAddress}>Set to same as Shipping Address</Button>
          <FormLabel>Billing Information</FormLabel>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Card Number"
              aria-label="Card Number"
              aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Name on Card"
              aria-label="Name on Card"
              aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Expiration Date"
              aria-label="Expiration Date"
              aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Security Code"
              aria-label="Security Code"
              aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Street Address"
              aria-label="Street Address"
              aria-describedby="basic-addon1"
              onChange={(e) => setBillingStreetAddress(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="City"
              aria-label="City"
              aria-describedby="basic-addon1"
              onChange={(e) => setBillingCity(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="State"
              aria-label="State"
              aria-describedby="basic-addon1"
              onChange={(e) => setBillingState(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Country"
              aria-label="Country"
              aria-describedby="basic-addon1"
              onChange={(e) => setBillingCountry(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Zip Code"
              aria-label="Zip Code"
              aria-describedby="basic-addon1"
              onChange={(e) => setBillingZipCode(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default OrderForm;