import React from 'react';
import { orderGet } from './orderGet';

const GetOrder = async () => {
  const orderId = 'c1248e71-dd98-48cb-88f1-4cc82a3bc2f8';
  const response = (await orderGet('id', orderId))?.body;

  //   const orderKey = 'sebastian-franklin-01';
  //   const keyResponse = (await orderGet('key', orderKey))?.body;

  const orderNumber = ''; //Order number needs ot be set by user, its optionally. None is available in data hence blank
  const orderNumberResponse = (await orderGet('orderNumber', orderNumber))
    ?.body;

  const allOrders = (await orderGet())?.body;
  const latestCreatedOrder = (await orderGet())?.body?.results?.pop();

  const secondLastOrder = (await orderGet())?.body?.results?.[
    allOrders?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created order ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Order Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(latestCreatedOrder?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cart: </span>
          {JSON.stringify(latestCreatedOrder?.cart)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedOrder?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedOrder?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(latestCreatedOrder?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(latestCreatedOrder?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(latestCreatedOrder?.customerId)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(latestCreatedOrder?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(latestCreatedOrder?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedOrder?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {latestCreatedOrder?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(latestCreatedOrder?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {latestCreatedOrder?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedOrder?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.orderState)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.origin)}
        </p>
        <p>
          <span className="font-bold">paymentInfo: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.paymentInfo)}
        </p>
        <p>
          <span className="font-bold">paymentState: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.paymentState)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">returnInfo: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.returnInfo)}
        </p>
        <p>
          <span className="font-bold">shipmentState: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.shipmentState)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.store)}
        </p>
        <p>
          <span className="font-bold">syncInfo: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.syncInfo)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">transactionFee: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.transactionFee)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(latestCreatedOrder?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedOrder?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedOrder?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created order ***************/}

      {/* ************ Second Last Created Order ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Order Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(secondLastOrder?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cart: </span>
          {JSON.stringify(secondLastOrder?.cart)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastOrder?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastOrder?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(secondLastOrder?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(secondLastOrder?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(secondLastOrder?.customerId)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(secondLastOrder?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(secondLastOrder?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastOrder?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {secondLastOrder?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(secondLastOrder?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {secondLastOrder?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastOrder?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastOrder?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(secondLastOrder?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(secondLastOrder?.orderState)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(secondLastOrder?.origin)}
        </p>
        <p>
          <span className="font-bold">paymentInfo: </span>{' '}
          {JSON.stringify(secondLastOrder?.paymentInfo)}
        </p>
        <p>
          <span className="font-bold">paymentState: </span>{' '}
          {JSON.stringify(secondLastOrder?.paymentState)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(secondLastOrder?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">returnInfo: </span>{' '}
          {JSON.stringify(secondLastOrder?.returnInfo)}
        </p>
        <p>
          <span className="font-bold">shipmentState: </span>{' '}
          {JSON.stringify(secondLastOrder?.shipmentState)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(secondLastOrder?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(secondLastOrder?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(secondLastOrder?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(secondLastOrder?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(secondLastOrder?.store)}
        </p>
        <p>
          <span className="font-bold">syncInfo: </span>{' '}
          {JSON.stringify(secondLastOrder?.syncInfo)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(secondLastOrder?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(secondLastOrder?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(secondLastOrder?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(secondLastOrder?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(secondLastOrder?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(secondLastOrder?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">transactionFee: </span>{' '}
          {JSON.stringify(secondLastOrder?.transactionFee)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(secondLastOrder?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {secondLastOrder?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastOrder?.versionModifiedAt}
        </p>
      </div>
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
        <h2>{JSON.stringify(allOrders)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Cart Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {orderId}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(response?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cart: </span>
          {JSON.stringify(response?.cart)}
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
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(response?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(response?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(response?.customerId)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(response?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(response?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {response?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(response?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {response?.lastMessageSequenceNumber}
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
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(response?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(response?.orderState)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(response?.origin)}
        </p>
        <p>
          <span className="font-bold">paymentInfo: </span>{' '}
          {JSON.stringify(response?.paymentInfo)}
        </p>
        <p>
          <span className="font-bold">paymentState: </span>{' '}
          {JSON.stringify(response?.paymentState)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(response?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">returnInfo: </span>{' '}
          {JSON.stringify(response?.returnInfo)}
        </p>
        <p>
          <span className="font-bold">shipmentState: </span>{' '}
          {JSON.stringify(response?.shipmentState)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(response?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(response?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(response?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(response?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(response?.store)}
        </p>
        <p>
          <span className="font-bold">syncInfo: </span>{' '}
          {JSON.stringify(response?.syncInfo)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(response?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(response?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(response?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(response?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(response?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(response?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">transactionFee: </span>{' '}
          {JSON.stringify(response?.transactionFee)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(response?.type)}
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
          Get Order Details using Order number
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Order number being passed: {orderNumber}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(orderNumberResponse?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cart: </span>
          {JSON.stringify(orderNumberResponse?.cart)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(orderNumberResponse?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(orderNumberResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(orderNumberResponse?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(orderNumberResponse?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(orderNumberResponse?.customerId)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(orderNumberResponse?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(orderNumberResponse?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {orderNumberResponse?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {orderNumberResponse?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(orderNumberResponse?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {orderNumberResponse?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {orderNumberResponse?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(orderNumberResponse?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(orderNumberResponse?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(orderNumberResponse?.orderState)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(orderNumberResponse?.origin)}
        </p>
        <p>
          <span className="font-bold">paymentInfo: </span>{' '}
          {JSON.stringify(orderNumberResponse?.paymentInfo)}
        </p>
        <p>
          <span className="font-bold">paymentState: </span>{' '}
          {JSON.stringify(orderNumberResponse?.paymentState)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(orderNumberResponse?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">returnInfo: </span>{' '}
          {JSON.stringify(orderNumberResponse?.returnInfo)}
        </p>
        <p>
          <span className="font-bold">shipmentState: </span>{' '}
          {JSON.stringify(orderNumberResponse?.shipmentState)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(orderNumberResponse?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(orderNumberResponse?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(orderNumberResponse?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(orderNumberResponse?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(orderNumberResponse?.store)}
        </p>
        <p>
          <span className="font-bold">syncInfo: </span>{' '}
          {JSON.stringify(orderNumberResponse?.syncInfo)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(orderNumberResponse?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(orderNumberResponse?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(orderNumberResponse?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(orderNumberResponse?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(orderNumberResponse?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(orderNumberResponse?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">transactionFee: </span>{' '}
          {JSON.stringify(orderNumberResponse?.transactionFee)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(orderNumberResponse?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {orderNumberResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {orderNumberResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Order number ***************/}
    </div>
  );
};

export default GetOrder;
