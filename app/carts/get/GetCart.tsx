import React from 'react';
import { cartGet } from './cartGet';

const GetCart = async () => {
  const cartId = '511fe90e-8182-4acb-9491-991b398aadaf';
  const response = (await cartGet('id', cartId))?.body;

  const cartKey = 'cart-1-au';
  const keyResponse = (await cartGet('key', cartKey))?.body;

  const cartCustomerId = '57338659-20dc-4094-b7df-e112725d5a7b';
  const customerIdResponse = (await cartGet('customerId', cartCustomerId))
    ?.body;

  const allCarts = (await cartGet())?.body;
  const latestCreatedCart = (await cartGet())?.body?.results?.pop();

  const secondLastCart = (await cartGet())?.body?.results?.[
    allCarts?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Cart ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Cart Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(latestCreatedCart?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cartState: </span>
          {JSON.stringify(latestCreatedCart?.cartState)}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {JSON.stringify(latestCreatedCart?.country)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedCart?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedCart?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(latestCreatedCart?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(latestCreatedCart?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(latestCreatedCart?.customerId)}
        </p>
        <p>
          <span className="font-bold">deleteDaysAfterLastModification: </span>
          {JSON.stringify(latestCreatedCart?.deleteDaysAfterLastModification)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(latestCreatedCart?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(latestCreatedCart?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedCart?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {latestCreatedCart?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(latestCreatedCart?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedCart?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {latestCreatedCart?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedCart?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedCart?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(latestCreatedCart?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(latestCreatedCart?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(latestCreatedCart?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(latestCreatedCart?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(latestCreatedCart?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(latestCreatedCart?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(latestCreatedCart?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(latestCreatedCart?.store)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(latestCreatedCart?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(latestCreatedCart?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(latestCreatedCart?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(latestCreatedCart?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(latestCreatedCart?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(latestCreatedCart?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(latestCreatedCart?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(latestCreatedCart?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedCart?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedCart?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Cart ***************/}

      {/* ************ Second Last Created Cart ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Cart Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(secondLastCart?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cartState: </span>
          {JSON.stringify(secondLastCart?.cartState)}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {JSON.stringify(secondLastCart?.country)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastCart?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastCart?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(secondLastCart?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(secondLastCart?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(secondLastCart?.customerId)}
        </p>
        <p>
          <span className="font-bold">deleteDaysAfterLastModification: </span>
          {JSON.stringify(secondLastCart?.deleteDaysAfterLastModification)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(secondLastCart?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(secondLastCart?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastCart?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {secondLastCart?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(secondLastCart?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastCart?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {secondLastCart?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastCart?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastCart?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(secondLastCart?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(secondLastCart?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(secondLastCart?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(secondLastCart?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(secondLastCart?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(secondLastCart?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(secondLastCart?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(secondLastCart?.store)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(secondLastCart?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(secondLastCart?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(secondLastCart?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(secondLastCart?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(secondLastCart?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(secondLastCart?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(secondLastCart?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(secondLastCart?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {secondLastCart?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastCart?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Created Cart ************** */}

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
          All carts in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allCarts)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Cart Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {cartId}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(response?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cartState: </span>
          {JSON.stringify(response?.cartState)}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {JSON.stringify(response?.country)}
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
          <span className="font-bold">deleteDaysAfterLastModification: </span>
          {JSON.stringify(response?.deleteDaysAfterLastModification)}
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
          <span className="font-bold">key: </span>
          {response?.key}
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
          {JSON.stringify(response?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(response?.refusedGifts)}
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
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(response?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(response?.totalPrice)}
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

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Cart Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {cartKey}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(keyResponse?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cartState: </span>
          {JSON.stringify(keyResponse?.cartState)}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {JSON.stringify(keyResponse?.country)}
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
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(keyResponse?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(keyResponse?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(keyResponse?.customerId)}
        </p>
        <p>
          <span className="font-bold">deleteDaysAfterLastModification: </span>
          {JSON.stringify(keyResponse?.deleteDaysAfterLastModification)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(keyResponse?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(keyResponse?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {keyResponse?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(keyResponse?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {keyResponse?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {keyResponse?.lastMessageSequenceNumber}
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
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(keyResponse?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(keyResponse?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(keyResponse?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(keyResponse?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(keyResponse?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(keyResponse?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(keyResponse?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(keyResponse?.store)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(keyResponse?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(keyResponse?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(keyResponse?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(keyResponse?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(keyResponse?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(keyResponse?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(keyResponse?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(keyResponse?.type)}
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

      {/************* Customer Id ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Cart Details using Customer Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Customer Id being passed: {cartCustomerId}
        </h3>
        <p>
          <span className="font-bold">billingAddress: </span>
          {JSON.stringify(customerIdResponse?.billingAddress)}
        </p>
        <p>
          <span className="font-bold">cartState: </span>
          {JSON.stringify(customerIdResponse?.cartState)}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {JSON.stringify(customerIdResponse?.country)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(customerIdResponse?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(customerIdResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>
          {JSON.stringify(customerIdResponse?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>
          {JSON.stringify(customerIdResponse?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>
          {JSON.stringify(customerIdResponse?.customerId)}
        </p>
        <p>
          <span className="font-bold">deleteDaysAfterLastModification: </span>
          {JSON.stringify(customerIdResponse?.deleteDaysAfterLastModification)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>
          {JSON.stringify(customerIdResponse?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>
          {JSON.stringify(customerIdResponse?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {customerIdResponse?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>
          {customerIdResponse?.inventoryMode}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>
          {JSON.stringify(customerIdResponse?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {customerIdResponse?.key}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>
          {customerIdResponse?.lastMessageSequenceNumber}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {customerIdResponse?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(customerIdResponse?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItem: </span>{' '}
          {JSON.stringify(customerIdResponse?.lineItem)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(customerIdResponse?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(customerIdResponse?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(customerIdResponse?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingAddress: </span>{' '}
          {JSON.stringify(customerIdResponse?.shippingAddress)}
        </p>
        <p>
          <span className="font-bold">shippingInfo: </span>{' '}
          {JSON.stringify(customerIdResponse?.shippingInfo)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(customerIdResponse?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">store: </span>{' '}
          {JSON.stringify(customerIdResponse?.store)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(customerIdResponse?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(customerIdResponse?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(customerIdResponse?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">taxedPrice: </span>{' '}
          {JSON.stringify(customerIdResponse?.taxedPrice)}
        </p>
        <p>
          <span className="font-bold">taxedShippingPrice: </span>{' '}
          {JSON.stringify(customerIdResponse?.taxedShippingPrice)}
        </p>
        <p>
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(customerIdResponse?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(customerIdResponse?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(customerIdResponse?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {customerIdResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {customerIdResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Customer Id ***************/}
    </div>
  );
};

export default GetCart;
