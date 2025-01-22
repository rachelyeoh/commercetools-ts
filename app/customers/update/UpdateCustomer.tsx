import React from 'react';
import { customerUpdate } from './customerUpdate';

const postBody = {
  // The CustomerUpdate is the object within the body
  body: {
    // The version of a new Customer is 1. This value is incremented every time an update action is applied to the Customer. If the specified version does not match the current version, the request returns an error.
    version: 5,
    //Check update actions page to see what can be updated: https://docs.commercetools.com/api/projects/customers#update-actions
    actions: [
      //   {
      //     action: 'changeEmail', //This is mandatory
      //     email: 'mLoris@email.com', //This is mandatory
      //   },
      {
        action: 'setFirstName',
        firstName: 'Mayar', //this is optional. If empty, any existing value is removed.
      },
      //   {
      //     action: 'setLastName',
      //     lastName: 'Loris', //this is optional. If empty, any existing value is removed.
      //   },
      //   {
      //     action: 'setMiddleName',
      //     middleName: 'Samson', //this is optional. If empty, any existing value is removed.
      //   },
      //   {
      //     action: 'setTitle',
      //     title: 'Dato', //this is optional. If empty, any existing value is removed.
      //   },
      //   {
      //     action: 'setSalutation',
      //     salutation: 'Mr', //this is optional. If empty, any existing value is removed.
      //   },
      {
        action: 'setCustomerGroup',
        customerGroup: { key: 'vipCustomerGroup' },
      },
      // {
      //   action: 'addAddress', //remember that this is to append new address to existing, not modify
      //   address: {
      //     key: 'av-anatole-france',
      //     streetName: '5 Av. Anatole France',
      //     city: 'Paris',
      //     country: 'FR',
      //   }, //country is mandatory
      // },
      /*********** Example from docs: 
      {
          "action" : "addAddress",
          "address" : {
            "streetName" : "Easy St",
            "streetNumber" : "1",
            "postalCode" : "3427",
            "city" : "Diggers Rest",
            "country" : "AU"
          }
      }
      ********/
      {
        action: 'changeAddress',
        // addressId: 'addressId', //Either addressId or addressKey is required. This is string.
        addressKey: 'av-anatole-france', //Either addressId or addressKey is required. This is string.
        address: {
          firstName: 'Mason',
          lastName: 'Smith',
          key: 'av-anatole-france',
          streetNumber: '5',
          streetName: 'Av. Anatole France',
          postalCode: '75011',
          city: 'Paris',
          country: 'FR',
        },
      },
      //   {
      //     action: 'removeAddress',
      //     addressId: 'addressId', //Either addressId or addressKey is required. This is string.
      //     addressKey: 'addressKey', //Either addressId or addressKey is required. This is string.
      //   },
    ],
  },
};

const UpdateCustomer = async () => {
  const customerId = '57338659-20dc-4094-b7df-e112725d5a7b';
  const response = await customerUpdate('id', customerId, postBody);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-purple-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-purple-100">
          Updated Customer Details
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
          <span className="font-bold">customerGroup: </span>{' '}
          {JSON.stringify(responseBody?.customerGroup)}
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

export default UpdateCustomer;
