import React from 'react';
import { importContainerCreate } from './importContainerCreate';

const importContainerDraft = {
  key: '2nd-container',
  resourceType: 'product',
};

const CreateImportContainer = async () => {
  const response = await importContainerCreate(importContainerDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Customer ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Import Container Details
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
      {/************* End of Created Import Container ***************/}
    </div>
  );
};

export default CreateImportContainer;
