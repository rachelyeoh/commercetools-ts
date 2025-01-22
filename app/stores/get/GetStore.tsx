import React from 'react';
import { storeGet } from './storeGet';

const GetStore = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const storeId = '3f246ac2-3656-4066-8f1b-4ee2b2f51464';
  const response = (await storeGet('id', storeId))?.body;

  const storeKey = 'b2c-retail-store';
  const keyResponse = (await storeGet('key', storeKey))?.body;

  const allStores = (await storeGet())?.body;
  const latestCreatedStore = (await storeGet())?.body?.results?.pop();

  const secondLastStore = (await storeGet())?.body?.results?.[
    allStores?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Store ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Store Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">countries: </span>
          {JSON.stringify(latestCreatedStore?.countries)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedStore?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedStore?.createdBy)}
        </p>
        <p>
          <span className="font-bold">distributionChannels: </span>
          {JSON.stringify(latestCreatedStore?.distributionChannels)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedStore?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedStore?.key}
        </p>
        <p>
          <span className="font-bold">languages: </span>{' '}
          {JSON.stringify(latestCreatedStore?.languages)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(latestCreatedStore?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedStore?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedStore?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedStore?.name)}
        </p>
        <p>
          <span className="font-bold">productSelections: </span>{' '}
          {JSON.stringify(latestCreatedStore?.productSelections)}
        </p>
        <p>
          <span className="font-bold">supplyChannels: </span>{' '}
          {JSON.stringify(latestCreatedStore?.supplyChannels)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedStore?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedStore?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Store ***************/}

      {/* ************ Second Last Created Store ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Store Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">countries: </span>
          {JSON.stringify(secondLastStore?.countries)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastStore?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastStore?.createdBy)}
        </p>
        <p>
          <span className="font-bold">distributionChannels: </span>
          {JSON.stringify(secondLastStore?.distributionChannels)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastStore?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastStore?.key}
        </p>
        <p>
          <span className="font-bold">languages: </span>{' '}
          {JSON.stringify(secondLastStore?.languages)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(secondLastStore?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastStore?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastStore?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastStore?.name)}
        </p>
        <p>
          <span className="font-bold">productSelections: </span>{' '}
          {JSON.stringify(secondLastStore?.productSelections)}
        </p>
        <p>
          <span className="font-bold">supplyChannels: </span>{' '}
          {JSON.stringify(secondLastStore?.supplyChannels)}
        </p>
        <p>
          <span className="font-bold">version:</span> {secondLastStore?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastStore?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Store ************** */}

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
          All Store in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allStores)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Store Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {storeId}
        </h3>
        <p>
          <span className="font-bold">countries: </span>
          {JSON.stringify(response?.countries)}
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
          <span className="font-bold">distributionChannels: </span>
          {JSON.stringify(response?.distributionChannels)}
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
          <span className="font-bold">languages: </span>{' '}
          {JSON.stringify(response?.languages)}
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.name)}
        </p>
        <p>
          <span className="font-bold">productSelections: </span>{' '}
          {JSON.stringify(response?.productSelections)}
        </p>
        <p>
          <span className="font-bold">supplyChannels: </span>{' '}
          {JSON.stringify(response?.supplyChannels)}
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
          Get Stores Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {storeKey}
        </h3>
        <p>
          <span className="font-bold">countries: </span>
          {JSON.stringify(keyResponse?.countries)}
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
          <span className="font-bold">distributionChannels: </span>
          {JSON.stringify(keyResponse?.distributionChannels)}
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
          <span className="font-bold">languages: </span>{' '}
          {JSON.stringify(keyResponse?.languages)}
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.name)}
        </p>
        <p>
          <span className="font-bold">productSelections: </span>{' '}
          {JSON.stringify(keyResponse?.productSelections)}
        </p>
        <p>
          <span className="font-bold">supplyChannels: </span>{' '}
          {JSON.stringify(keyResponse?.supplyChannels)}
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

export default GetStore;
