import React from 'react';
import { cartCreate } from './cartCreate';

const lineItemDraft = [
  {
    key: 'line-item-2',
    productId: '2ffa52c9-3433-481e-93b5-37c182aa92c5',
    variantId: 1,
    // sku: 'GMCT-01',
    quantity: 1,
    externalPrice: {
      currencyCode: 'USD',
      centAmount: 4200,
    },
  },
]; // For Product Variant identification, either the productId and variantId, or sku must be provided.

const cartDraft = {
  key: 'cart-1-usd',
  currency: 'USD',
  customerId: '57338659-20dc-4094-b7df-e112725d5a7b', //dummy mason smith
  customerEmail: 'mason-smith@email.com',
  // customerGroup: {
  //   id: 'b199d527-099a-4efa-84fd-3eec59e780a3',
  //   typeId: 'customer-group',
  // },
  lineItems: lineItemDraft,
  inventoryMode: 'ReserveOnOrder',
  taxMode: 'External',
  country: 'US',
  locale: 'en-US',
};

const CreateCart = async () => {
  const response = await cartCreate(cartDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Cart ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Cart Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
          <span className="font-bold">cartState: </span>
          {responseBody?.cartState}
        </p>
        <p>
          <span className="font-bold">country: </span>
          {responseBody?.country}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">customLineItems: </span>{' '}
          {JSON.stringify(responseBody?.customLineItems)}
        </p>
        <p>
          <span className="font-bold">customerEmail: </span>{' '}
          {JSON.stringify(responseBody?.customerEmail)}
        </p>
        <p>
          <span className="font-bold">customerGroup: </span>{' '}
          {JSON.stringify(responseBody?.customerGroup)}
        </p>
        <p>
          <span className="font-bold">customerId: </span>{' '}
          {JSON.stringify(responseBody?.customerId)}
        </p>
        <p>
          <span className="font-bold">deleteDaysAfterLastModification: </span>{' '}
          {JSON.stringify(responseBody?.deleteDaysAfterLastModification)}
        </p>
        <p>
          <span className="font-bold">directDiscounts: </span>{' '}
          {JSON.stringify(responseBody?.directDiscounts)}
        </p>
        <p>
          <span className="font-bold">discountCodes: </span>{' '}
          {JSON.stringify(responseBody?.discountCodes)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {responseBody?.id}
        </p>
        <p>
          <span className="font-bold">inventoryMode: </span>{' '}
          {JSON.stringify(responseBody?.inventoryMode)}
        </p>
        <p>
          <span className="font-bold">itemShippingAddresses: </span>{' '}
          {JSON.stringify(responseBody?.itemShippingAddresses)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(responseBody?.key)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(responseBody?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedAt)}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lineItems: </span>{' '}
          {JSON.stringify(responseBody?.lineItems)}
        </p>
        <p>
          <span className="font-bold">locale: </span>{' '}
          {JSON.stringify(responseBody?.locale)}
        </p>
        <p>
          <span className="font-bold">origin: </span>{' '}
          {JSON.stringify(responseBody?.origin)}
        </p>
        <p>
          <span className="font-bold">refusedGifts: </span>{' '}
          {JSON.stringify(responseBody?.refusedGifts)}
        </p>
        <p>
          <span className="font-bold">shipping: </span>{' '}
          {JSON.stringify(responseBody?.shipping)}
        </p>
        <p>
          <span className="font-bold">shippingMode: </span>{' '}
          {JSON.stringify(responseBody?.shippingMode)}
        </p>
        <p>
          <span className="font-bold">taxCalculationMode: </span>{' '}
          {JSON.stringify(responseBody?.taxCalculationMode)}
        </p>
        <p>
          <span className="font-bold">taxMode: </span>{' '}
          {JSON.stringify(responseBody?.taxMode)}
        </p>
        <p>
          <span className="font-bold">taxRoundingMode: </span>{' '}
          {JSON.stringify(responseBody?.taxRoundingMode)}
        </p>
        <p>
          <span className="font-bold">totalLineItemQuantity: </span>{' '}
          {JSON.stringify(responseBody?.totalLineItemQuantity)}
        </p>
        <p>
          <span className="font-bold">totalPrice: </span>{' '}
          {JSON.stringify(responseBody?.totalPrice)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(responseBody?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {responseBody?.versionModifiedAt}
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
          <span className="font-bold">name: </span> {responseBody?.name}
        </p>
        <p>
          <span className="font-bold">key: </span> {responseBody?.key}
        </p>
      </div>
      {/************* End of Created Cart ***************/}
    </div>
  );
};

export default CreateCart;
