import React from 'react';
import { customerCreate } from './customerCreate';

const customerDraft = {
  key: 'masonsmith900',
  customerNumber: 'Mason Smith',
  externalId: 'EID-masonsmith900',
  email: 'mason-smith@email.com',
  // password: 'masonsmith123',
  firstName: 'Mason',
  lastName: 'Smith',
  middleName: 'Lewis',
  title: 'Mr',
  dateOfBirth: '1980-01-01',
  companyName: 'Acc',
  addresses: [
    {
      id: 'Townville',
      key: 'townville-address-1',
      externalId: 'EID-townville-address-1',
      country: 'DE',
      title: 'Dr',
      salutation: 'Mr',
      firstName: 'Mason',
      lastName: 'Smith',
      streetName: 'Main Street',
      streetNumber: '1',
      additionalStreetInfo: 'Busiest Street',
      postalCode: '12345',
      city: 'Townville',
      region: 'Bavaria',
      state: 'HOU',
      company: 'Acc',
      department: 'Sales',
      apartment: '20',
      phone: '+49 123 456 789',
      mobile: '+49 123 456 789',
      email: 'mason-smith@email.com',
      additionalAddressInfo: 'Private Property',
    },
  ],
  defaultShippingAddress: 0,
  shippingAddresses: [0],
  defaultBillingAddress: 0,
  billingAddresses: [0],
  isEmailVerified: false,
  locale: 'en-US',
  salutation: 'Mr',
  stores: [],
  authenticationMode: 'ExternalAuth', //External Auth doesn't support password - no pass required. Enabling external authentication will erase the customer's password permanently.
  // custom: {
  //   // type: {
  //   //   key: 'key-of-type',
  //   //   typeId: 'type',
  //   // },
  //   fields: {
  //     exampleStringField: 'The value of this Custom Field.',
  //   },
  // },
};

const CreateCustomer = async () => {
  const response = await customerCreate(customerDraft);
  const responseBody = response?.body?.customer;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Customer Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">id: </span>
          {responseBody?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {responseBody?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {responseBody?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {responseBody?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customerNumber: </span>{' '}
          {responseBody?.customerNumber}
        </p>
        <p>
          <span className="font-bold">email: </span> {responseBody?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span>{' '}
          {responseBody?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span> {responseBody?.lastName}
        </p>
        <p>
          <span className="font-bold">middleName: </span>{' '}
          {responseBody?.middleName}
        </p>
        <p>
          <span className="font-bold">title: </span> {responseBody?.title}
        </p>
        <p>
          <span className="font-bold">locale: </span> {responseBody?.locale}
        </p>
        <p>
          <span className="font-bold">salutation: </span>{' '}
          {responseBody?.salutation}
        </p>
        <p>
          <span className="font-bold">dateOfBirth: </span>{' '}
          {responseBody?.dateOfBirth}
        </p>
        <p>
          <span className="font-bold">companyName: </span>{' '}
          {responseBody?.companyName}
        </p>
        <p>
          <span className="font-bold">password: </span> {responseBody?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(responseBody?.addresses)}
        </p>
        <p>
          <span className="font-bold">defaultShippingAddressId: </span>{' '}
          {JSON.stringify(responseBody?.defaultShippingAddressId)}
        </p>
        <p>
          <span className="font-bold">defaultBillingAddressId: </span>{' '}
          {JSON.stringify(responseBody?.defaultBillingAddressId)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(responseBody?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(responseBody?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(responseBody?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">externalId: </span>{' '}
          {JSON.stringify(responseBody?.externalId)}
        </p>
        <p>
          <span className="font-bold">key: </span> {responseBody?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(responseBody?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {responseBody?.authenticationMode}
        </p>
      </div>
      {/************* End of Created Customer ***************/}
    </div>
  );
};

export default CreateCustomer;
