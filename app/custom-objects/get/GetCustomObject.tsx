import React from 'react';
import { customObjectGet } from './customObjectGet';

const GetCustomObject = async () => {
  const customObjectContainer = 'user-preference';
  const response = (await customObjectGet('container', customObjectContainer))
    ?.body;

  const customObjectKey = 'preferred-name';
  const keyResponse = (
    await customObjectGet(
      'containerAndKey',
      customObjectContainer,
      customObjectKey
    )
  )?.body;

  //   const allCustomerGroups = (await customObjectGet())?.body;
  const latestCreatedCustomObject = (
    await customObjectGet('container', customObjectContainer)
  )?.body?.results?.pop();

  //   const secondLastCustomer = (await customObjectGet())?.body?.results?.[
  //     allCustomerGroups?.results?.length - 2
  //   ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Custom Object ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Custom Object Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        {Object.entries(latestCreatedCustomObject).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="font-bold">
                {JSON.stringify(key)} :
                <span className="font-normal">{JSON.stringify(value)}</span>
              </p>
            </div>
          );
        })}
      </div>
      {/************* End of Last Created Custom Object ***************/}

      {/* ************ Second Last Created Customer ***************/}
      {/* <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Customer Group Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">id: </span>
          {secondLastCustomer?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastCustomer?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastCustomer?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {secondLastCustomer?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastCustomer?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastCustomer?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastCustomer?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(secondLastCustomer?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customerNumber: </span>{' '}
          {secondLastCustomer?.customerNumber}
        </p>
        <p>
          <span className="font-bold">email: </span> {secondLastCustomer?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span>{' '}
          {secondLastCustomer?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span>{' '}
          {secondLastCustomer?.lastName}
        </p>
        <p>
          <span className="font-bold">middleName: </span>{' '}
          {secondLastCustomer?.middleName}
        </p>
        <p>
          <span className="font-bold">title: </span> {secondLastCustomer?.title}
        </p>
        <p>
          <span className="font-bold">locale: </span>{' '}
          {secondLastCustomer?.locale}
        </p>
        <p>
          <span className="font-bold">salutation: </span>{' '}
          {secondLastCustomer?.salutation}
        </p>
        <p>
          <span className="font-bold">dateOfBirth: </span>{' '}
          {secondLastCustomer?.dateOfBirth}
        </p>
        <p>
          <span className="font-bold">companyName: </span>{' '}
          {secondLastCustomer?.companyName}
        </p>
        <p>
          <span className="font-bold">password: </span>{' '}
          {secondLastCustomer?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(secondLastCustomer?.addresses)}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(secondLastCustomer?.defaultShippingAddressId)}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(secondLastCustomer?.defaultBillingAddressId)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(secondLastCustomer?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(secondLastCustomer?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(secondLastCustomer?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(secondLastCustomer?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(secondLastCustomer?.externalId)}
        </p>
        <p>
          <span className="font-bold">key: </span> {secondLastCustomer?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(secondLastCustomer?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {secondLastCustomer?.authenticationMode}
        </p>
      </div> */}
      {/************* End of Second Last Created Customer ************** */}

      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(response)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(keyResponse)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(emailResponse)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          All customers in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allCustomerGroups)}</h2>
      </div> */}

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Custom Object using Container
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Container being passed: {customObjectContainer}
        </h3>
        {Object.entries(response).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="font-bold">
                {JSON.stringify(key)} :
                <span className="font-normal">{JSON.stringify(value)}</span>
              </p>
            </div>
          );
        })}
        {/* <p>
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {response?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {response?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {response?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {response?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(response?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(response?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span> {response?.name}
        </p>
        <p>
          <span className="font-bold">key: </span> {response?.key}
        </p> */}
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Custom Object using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {customObjectKey}
        </h3>
        {Object.entries(keyResponse).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="font-bold">
                {JSON.stringify(key)} :
                <span className="font-normal">{JSON.stringify(value)}</span>
              </p>
            </div>
          );
        })}
        {/* <p>
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {keyResponse?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {keyResponse?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(keyResponse?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(keyResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span> {keyResponse?.name}
        </p>
        <p>
          <span className="font-bold">key: </span> {keyResponse?.key}
        </p> */}
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetCustomObject;
