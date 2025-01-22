import React from 'react';
import { paymentGet } from './paymentGet';

const GetPayment = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const paymentId = 'e5dca73e-cd3d-4357-a26f-15c9f4690bad';
  const response = (await paymentGet('id', paymentId))?.body;

  const paymentKey = 'sebastian-mueller-01';
  const keyResponse = (await paymentGet('key', paymentKey))?.body;

  const allPayments = (await paymentGet())?.body;
  const latestCreatedPayment = (await paymentGet())?.body?.results?.pop();

  const secondLastPayment = (await paymentGet())?.body?.results?.[
    allPayments?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Payment ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Payment Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">amountPlanned: </span>
          {JSON.stringify(latestCreatedPayment?.amountPlanned)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedPayment?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedPayment?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customer: </span>
          {JSON.stringify(latestCreatedPayment?.customer)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedPayment?.id}
        </p>
        <p>
          <span className="font-bold">interfaceInteractions: </span>
          {JSON.stringify(latestCreatedPayment?.interfaceInteractions)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedPayment?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(latestCreatedPayment?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedPayment?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedPayment?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">paymentMethodInfo: </span>{' '}
          {JSON.stringify(latestCreatedPayment?.paymentMethodInfo)}
        </p>
        <p>
          <span className="font-bold">paymentStatus: </span>{' '}
          {JSON.stringify(latestCreatedPayment?.paymentStatus)}
        </p>
        <p>
          <span className="font-bold">transactions: </span>{' '}
          {JSON.stringify(latestCreatedPayment?.transactions)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedPayment?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedPayment?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Payment ***************/}

      {/* ************ Second Last Created Payment ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Payment Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">amountPlanned: </span>
          {JSON.stringify(secondLastPayment?.amountPlanned)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedPayment?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastPayment?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customer: </span>
          {JSON.stringify(secondLastPayment?.customer)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastPayment?.id}
        </p>
        <p>
          <span className="font-bold">interfaceInteractions: </span>
          {JSON.stringify(secondLastPayment?.interfaceInteractions)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastPayment?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(secondLastPayment?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastPayment?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastPayment?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">paymentMethodInfo: </span>{' '}
          {JSON.stringify(secondLastPayment?.paymentMethodInfo)}
        </p>
        <p>
          <span className="font-bold">paymentStatus: </span>{' '}
          {JSON.stringify(secondLastPayment?.paymentStatus)}
        </p>
        <p>
          <span className="font-bold">transactions: </span>{' '}
          {JSON.stringify(secondLastPayment?.transactions)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastPayment?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastPayment?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Payment ************** */}

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
          All Payment in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allPayments)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Payment Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {paymentId}
        </h3>
        <p>
          <span className="font-bold">amountPlanned: </span>
          {JSON.stringify(response?.amountPlanned)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(response?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(response?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customer: </span>
          {JSON.stringify(response?.customer)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">interfaceInteractions: </span>
          {JSON.stringify(response?.interfaceInteractions)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {response?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(response?.lastMessageSequenceNumber)}
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
          <span className="font-bold">paymentMethodInfo: </span>{' '}
          {JSON.stringify(response?.paymentMethodInfo)}
        </p>
        <p>
          <span className="font-bold">paymentStatus: </span>{' '}
          {JSON.stringify(response?.paymentStatus)}
        </p>
        <p>
          <span className="font-bold">transactions: </span>{' '}
          {JSON.stringify(response?.transactions)}
        </p>
        <p>
          <span className="font-bold">version:</span> {response?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {response?.versionModifiedAt}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Payments Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {paymentKey}
        </h3>
        <p>
          <span className="font-bold">amountPlanned: </span>
          {JSON.stringify(keyResponse?.amountPlanned)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(keyResponse?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(keyResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customer: </span>
          {JSON.stringify(keyResponse?.customer)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">interfaceInteractions: </span>
          {JSON.stringify(keyResponse?.interfaceInteractions)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {keyResponse?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(keyResponse?.lastMessageSequenceNumber)}
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
          <span className="font-bold">paymentMethodInfo: </span>{' '}
          {JSON.stringify(keyResponse?.paymentMethodInfo)}
        </p>
        <p>
          <span className="font-bold">paymentStatus: </span>{' '}
          {JSON.stringify(keyResponse?.paymentStatus)}
        </p>
        <p>
          <span className="font-bold">transactions: </span>{' '}
          {JSON.stringify(keyResponse?.transactions)}
        </p>
        <p>
          <span className="font-bold">version:</span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetPayment;
