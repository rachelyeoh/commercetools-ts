import React from 'react';
import { orderEditGet } from './orderEditGet';

const GetOrder = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const orderEditId = 'abf39395-5e60-4ad8-ac16-a84839a1285e';
  const response = (await orderEditGet('id', orderEditId))?.body;

  const orderEditKey = 'order-edit-1';
  const keyResponse = (await orderEditGet('key', orderEditKey))?.body;

  const allOrderEdits = (await orderEditGet())?.body;
  const latestCreatedOrderEdit = (await orderEditGet())?.body?.results?.pop();

  // const secondLastOrderEdit = (await orderEditGet())?.body?.results?.[
  //   allOrderEdits?.results?.length - 2
  // ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created order edit ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Order Edit Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">comment: </span>
          {JSON.stringify(latestCreatedOrderEdit?.comment)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedOrderEdit?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedOrderEdit?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedOrderEdit?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedOrderEdit?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedOrderEdit?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">resource: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.resource)}
        </p>
        {/* <p>
          <span className="font-bold">result: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result)}
        </p> */}
        <p className="font-semibold text-orange-600">result</p>
        <p>
          <span className="font-bold">messagePayloads: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result?.messagePayloads)}
        </p>
        <p>
          <span className="font-bold">preview: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result?.preview)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result?.type)}
        </p>
        <p className="font-semibold text-orange-600">end of result</p>
        <p>
          <span className="font-bold">stagedActions: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.stagedActions)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedOrderEdit?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedOrderEdit?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created order ***************/}

      {/* ************ Second Last Created Order ***************/}
      {/* <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Order Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(secondLastOrderEdit?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cart: </span>
          {JSON.stringify(secondLastOrderEdit?.cart)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastOrderEdit?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastOrderEdit?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(secondLastOrderEdit?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(secondLastOrderEdit?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(secondLastOrderEdit?.customerId)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(secondLastOrderEdit?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(secondLastOrderEdit?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastOrderEdit?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {secondLastOrderEdit?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(secondLastOrderEdit?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {secondLastOrderEdit?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastOrderEdit?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.orderState)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.origin)}
        </p>
        <p>
          <span className="font-bold">paymentInfo: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.paymentInfo)}
        </p>
        <p>
          <span className="font-bold">paymentState: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.paymentState)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">returnInfo: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.returnInfo)}
        </p>
        <p>
          <span className="font-bold">shipmentState: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.shipmentState)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.store)}
        </p>
        <p>
          <span className="font-bold">syncInfo: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.syncInfo)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">transactionFee: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.transactionFee)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(secondLastOrderEdit?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastOrderEdit?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastOrderEdit?.versionModifiedAt}
        </p>
      </div> */}
      {/************* End of Second Last Created Order ************** */}

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
          All orders in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allOrderEdits)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Order Edit Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {orderEditId}
        </h3>
        <p>
          <span className="font-bold">comment: </span>
          {JSON.stringify(response?.comment)}
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
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {response?.key}
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
          <span className="font-bold">resource: </span>{' '}
          {JSON.stringify(response?.resource)}
        </p>
        {/* <p>
          <span className="font-bold">result: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result)}
        </p> */}
        <p className="font-semibold text-orange-600">result</p>
        <p>
          <span className="font-bold">messagePayloads: </span>{' '}
          {JSON.stringify(response?.result?.messagePayloads)}
        </p>
        <p>
          <span className="font-bold">preview: </span>{' '}
          {JSON.stringify(response?.result?.preview)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(response?.result?.type)}
        </p>
        <p className="font-semibold text-orange-600">end of result</p>
        <p>
          <span className="font-bold">stagedActions: </span>{' '}
          {JSON.stringify(response?.stagedActions)}
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

      {/************* Order Number ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Order Edit Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {orderEditKey}
        </h3>
        <p>
          <span className="font-bold">comment: </span>
          {JSON.stringify(keyResponse?.comment)}
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
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {keyResponse?.key}
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
          <span className="font-bold">resource: </span>{' '}
          {JSON.stringify(keyResponse?.resource)}
        </p>
        {/* <p>
          <span className="font-bold">result: </span>{' '}
          {JSON.stringify(latestCreatedOrderEdit?.result)}
        </p> */}
        <p className="font-semibold text-orange-600">result</p>
        <p>
          <span className="font-bold">messagePayloads: </span>{' '}
          {JSON.stringify(keyResponse?.result?.messagePayloads)}
        </p>
        <p>
          <span className="font-bold">preview: </span>{' '}
          {JSON.stringify(keyResponse?.result?.preview)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(keyResponse?.result?.type)}
        </p>
        <p className="font-semibold text-orange-600">end of result</p>
        <p>
          <span className="font-bold">stagedActions: </span>{' '}
          {JSON.stringify(keyResponse?.stagedActions)}
        </p>
        <p>
          <span className="font-bold">version:</span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Order number ***************/}
    </div>
  );
};

export default GetOrder;
