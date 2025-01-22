import React from 'react';
import { customerGet } from './customerGet';

const GetCustomer = async () => {
  const customerId = '926e088a-ede4-49b2-b707-703505db9aec';
  const response = (await customerGet('id', customerId))?.body;

  const customerKey = 'jennifer-jones';
  const keyResponse = (await customerGet('key', customerKey))?.body;

  const customerEmail = 'test-email-customer10@example.com';
  const emailResponse = (await customerGet('email', customerEmail))?.body
    ?.results?.[0];

  const allCustomers = (await customerGet())?.body;

  const latestCreatedCustomer = (await customerGet())?.body?.results?.pop();

  const secondLastCustomer = (await customerGet())?.body?.results?.[
    allCustomers?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Customer ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Customer Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedCustomer?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedCustomer?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedCustomer?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {latestCreatedCustomer?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedCustomer?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedCustomer?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customerNumber: </span>{' '}
          {latestCreatedCustomer?.customerNumber}
        </p>
        <p>
          <span className="font-bold">email: </span>{' '}
          {latestCreatedCustomer?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span>{' '}
          {latestCreatedCustomer?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span>{' '}
          {latestCreatedCustomer?.lastName}
        </p>
        <p>
          <span className="font-bold">middleName: </span>{' '}
          {latestCreatedCustomer?.middleName}
        </p>
        <p>
          <span className="font-bold">title: </span>{' '}
          {latestCreatedCustomer?.title}
        </p>
        <p>
          <span className="font-bold">locale: </span>{' '}
          {latestCreatedCustomer?.locale}
        </p>
        <p>
          <span className="font-bold">salutation: </span>{' '}
          {latestCreatedCustomer?.salutation}
        </p>
        <p>
          <span className="font-bold">dateOfBirth: </span>{' '}
          {latestCreatedCustomer?.dateOfBirth}
        </p>
        <p>
          <span className="font-bold">companyName: </span>{' '}
          {latestCreatedCustomer?.companyName}
        </p>
        <p>
          <span className="font-bold">password: </span>{' '}
          {latestCreatedCustomer?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.addresses)}
        </p>
        <p>
          <span className="font-bold">defaultShippingAddressId: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.defaultShippingAddressId)}
        </p>
        <p>
          <span className="font-bold">defaultBillingAddressId: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.defaultBillingAddressId)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">customerGroup: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.customerGroup)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.externalId)}
        </p>
        <p>
          <span className="font-bold">key: </span> {latestCreatedCustomer?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {latestCreatedCustomer?.authenticationMode}
        </p>
      </div>
      {/************* End of Created Customer ***************/}

      {/************* Second Last Created Customer ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Customer Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
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
      </div>
      {/************* End of Second Last Created Customer ***************/}

      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(response)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(keyResponse)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(emailResponse)}</h2>
      </div> */}
      <div className="ring-2 ring-blue-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          All customers in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allCustomers)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Customer Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {customerId}
        </h3>
        <p>
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
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {response?.lastMessageSequenceNumber}
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
          <span className="font-bold">email: </span> {response?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span> {response?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span> {response?.lastName}
        </p>
        <p>
          <span className="font-bold">password: </span> {response?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(response?.addresses)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(response?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(response?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(response?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">key: </span> {response?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(response?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {response?.authenticationMode}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Customer Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {customerKey}
        </h3>
        <p>
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
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {keyResponse?.lastMessageSequenceNumber}
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
          <span className="font-bold">email: </span> {keyResponse?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span>{' '}
          {keyResponse?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span> {keyResponse?.lastName}
        </p>
        <p>
          <span className="font-bold">password: </span> {keyResponse?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(keyResponse?.addresses)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(keyResponse?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(keyResponse?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(keyResponse?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">key: </span> {keyResponse?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(keyResponse?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {keyResponse?.authenticationMode}
        </p>
      </div>
      {/************* End of Key ***************/}

      {/************* Email ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Customer Details using Email
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Email being passed: {customerEmail}
        </h3>
        <p>
          <span className="font-bold">id: </span>
          {emailResponse?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {emailResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {emailResponse?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber:</span>{' '}
          {emailResponse?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {emailResponse?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {emailResponse?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(emailResponse?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(emailResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">email: </span> {emailResponse?.email}
        </p>
        <p>
          <span className="font-bold">firstName: </span>{' '}
          {emailResponse?.firstName}
        </p>
        <p>
          <span className="font-bold">lastName: </span>{' '}
          {emailResponse?.lastName}
        </p>
        <p>
          <span className="font-bold">password: </span>{' '}
          {emailResponse?.password}
        </p>
        <p>
          <span className="font-bold">addresses: </span>{' '}
          {JSON.stringify(emailResponse?.addresses)}
        </p>
        <p>
          <span className="font-bold">shippingAddressIds: </span>{' '}
          {JSON.stringify(emailResponse?.shippingAddressIds)}
        </p>
        <p>
          <span className="font-bold">billingAddressIds: </span>{' '}
          {JSON.stringify(emailResponse?.billingAddressIds)}
        </p>
        <p>
          <span className="font-bold">isEmailVerified: </span>{' '}
          {JSON.stringify(emailResponse?.isEmailVerified)}
        </p>
        <p>
          <span className="font-bold">key: </span> {emailResponse?.key}
        </p>
        <p>
          <span className="font-bold">stores: </span>{' '}
          {JSON.stringify(emailResponse?.stores)}
        </p>
        <p>
          <span className="font-bold">authenticationMode: </span>
          {emailResponse?.authenticationMode}
        </p>
      </div>
      {/************* End of Email ***************/}
    </div>
  );
};

export default GetCustomer;
