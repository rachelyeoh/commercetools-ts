import React from 'react';
import { customerGroupGet } from './customerGroupGet';

const GetCustomerGroup = async () => {
  const customerGroupId = 'b199d527-099a-4efa-84fd-3eec59e780a3';
  const response = (await customerGroupGet('id', customerGroupId))?.body;

  const customerGroupKey = 'vipCustomerGroup';
  const keyResponse = (await customerGroupGet('key', customerGroupKey))?.body;

  const allCustomerGroups = (await customerGroupGet())?.body;
  const latestCreatedCustomer = (
    await customerGroupGet()
  )?.body?.results?.pop();

  //   const secondLastCustomer = (await customerGroupGet())?.body?.results?.[
  //     allCustomerGroups?.results?.length - 2
  //   ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Customer ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Customer Group Details
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(latestCreatedCustomer?.key)}
        </p>
      </div>
      {/************* End of Created Customer ***************/}

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
      <div className="ring-2 ring-blue-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          All customers in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allCustomerGroups)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Customer Group Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {customerGroupId}
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
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Customer Group Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {customerGroupKey}
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
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetCustomerGroup;
