import React from 'react';
import { shippingMethodGet } from './shippingMethodGet';

const GetShippingMethod = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const shippingMethodId = 'fd92f35e-757c-4bda-8888-738f0b37a163';
  const response = (await shippingMethodGet('id', shippingMethodId))?.body;

  const shippingMethodKey = 'express-delivery';
  const keyResponse = (await shippingMethodGet('key', shippingMethodKey))?.body;

  const allShippingMethods = (await shippingMethodGet())?.body;
  const latestCreatedShippingMethod = (
    await shippingMethodGet()
  )?.body?.results?.pop();

  const secondLastShippingMethod = (await shippingMethodGet())?.body?.results?.[
    allShippingMethods?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Shipping method ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Shipping method Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">active: </span>
          {JSON.stringify(latestCreatedShippingMethod?.active)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedShippingMethod?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedShippingMethod?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedShippingMethod?.id}
        </p>
        <p>
          <span className="font-bold">isDefault: </span>
          {JSON.stringify(latestCreatedShippingMethod?.isDefault)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedShippingMethod?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedShippingMethod?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedShippingMethod?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">localizedName: </span>{' '}
          {JSON.stringify(latestCreatedShippingMethod?.localizedName)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedShippingMethod?.name)}
        </p>
        <p>
          <span className="font-bold">references: </span>{' '}
          {JSON.stringify(latestCreatedShippingMethod?.references)}
        </p>
        <p>
          <span className="font-bold">taxCategory: </span>{' '}
          {JSON.stringify(latestCreatedShippingMethod?.taxCategory)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedShippingMethod?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedShippingMethod?.versionModifiedAt}
        </p>
        <p className="font-semibold text-orange-600">zoneRates</p>
        {latestCreatedShippingMethod?.zoneRates?.map((zoneRate: any) => (
          <div key={zoneRate?.zone?.id}>
            <p>
              <span className="font-bold">shippingRates:</span>
              {JSON.stringify(zoneRate?.shippingRates)}
            </p>
            <p>
              <span className="font-bold">zone:</span>
              {JSON.stringify(zoneRate?.zone)}
            </p>
          </div>
        ))}
        <p className="font-semibold text-orange-600">end of zoneRates</p>
      </div>
      {/************* End of Created shipping method ***************/}

      {/* ************ Second Last Created Shipping method ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Shipping method Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">active: </span>
          {JSON.stringify(secondLastShippingMethod?.active)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastShippingMethod?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastShippingMethod?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastShippingMethod?.id}
        </p>
        <p>
          <span className="font-bold">isDefault: </span>
          {JSON.stringify(secondLastShippingMethod?.isDefault)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastShippingMethod?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastShippingMethod?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastShippingMethod?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">localizedName: </span>{' '}
          {JSON.stringify(secondLastShippingMethod?.localizedName)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastShippingMethod?.name)}
        </p>
        <p>
          <span className="font-bold">references: </span>{' '}
          {JSON.stringify(secondLastShippingMethod?.references)}
        </p>
        <p>
          <span className="font-bold">taxCategory: </span>{' '}
          {JSON.stringify(secondLastShippingMethod?.taxCategory)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastShippingMethod?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastShippingMethod?.versionModifiedAt}
        </p>
        <p className="font-semibold text-orange-600">zoneRates</p>
        {secondLastShippingMethod?.zoneRates?.map((zoneRate: any) => (
          <div key={zoneRate?.zone?.id}>
            <p>
              <span className="font-bold">shippingRates:</span>
              {JSON.stringify(zoneRate?.shippingRates)}
            </p>
            <p>
              <span className="font-bold">zone:</span>
              {JSON.stringify(zoneRate?.zone)}
            </p>
          </div>
        ))}
        <p className="font-semibold text-orange-600">end of zoneRates</p>
      </div>
      {/************* End of Second Last Shipping method ************** */}

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
          All shipping method in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allShippingMethods)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Shipping Method Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {shippingMethodId}
        </h3>
        <p>
          <span className="font-bold">active: </span>
          {JSON.stringify(response?.active)}
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
          <span className="font-bold">isDefault: </span>
          {JSON.stringify(response?.isDefault)}
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
          <span className="font-bold">localizedName: </span>{' '}
          {JSON.stringify(response?.localizedName)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.name)}
        </p>
        <p>
          <span className="font-bold">references: </span>{' '}
          {JSON.stringify(response?.references)}
        </p>
        <p>
          <span className="font-bold">taxCategory: </span>{' '}
          {JSON.stringify(response?.taxCategory)}
        </p>
        <p>
          <span className="font-bold">version:</span> {response?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {response?.versionModifiedAt}
        </p>
        <p className="font-semibold text-orange-600">zoneRates</p>
        {response?.zoneRates?.map((zoneRate: any) => (
          <div key={zoneRate?.zone?.id}>
            <p>
              <span className="font-bold">shippingRates:</span>
              {JSON.stringify(zoneRate?.shippingRates)}
            </p>
            <p>
              <span className="font-bold">zone:</span>
              {JSON.stringify(zoneRate?.zone)}
            </p>
          </div>
        ))}
        <p className="font-semibold text-orange-600">end of zoneRates</p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Shipping Methods Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {shippingMethodKey}
        </h3>
        <p>
          <span className="font-bold">active: </span>
          {JSON.stringify(keyResponse?.active)}
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
          <span className="font-bold">isDefault: </span>
          {JSON.stringify(keyResponse?.isDefault)}
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
          <span className="font-bold">localizedName: </span>{' '}
          {JSON.stringify(keyResponse?.localizedName)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.name)}
        </p>
        <p>
          <span className="font-bold">references: </span>{' '}
          {JSON.stringify(keyResponse?.references)}
        </p>
        <p>
          <span className="font-bold">taxCategory: </span>{' '}
          {JSON.stringify(keyResponse?.taxCategory)}
        </p>
        <p>
          <span className="font-bold">version:</span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
        <p className="font-semibold text-orange-600">zoneRates</p>
        {keyResponse?.zoneRates?.map((zoneRate: any) => (
          <div key={zoneRate?.zone?.id}>
            <p>
              <span className="font-bold">shippingRates:</span>
              {JSON.stringify(zoneRate?.shippingRates)}
            </p>
            <p>
              <span className="font-bold">zone:</span>
              {JSON.stringify(zoneRate?.zone)}
            </p>
          </div>
        ))}
        <p className="font-semibold text-orange-600">end of zoneRates</p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetShippingMethod;
