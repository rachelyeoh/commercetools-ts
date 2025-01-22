import React from 'react';
import { importContainerGet } from './importContainerGet';

const GetImportContainer = async () => {
  const importContainerKey = 'myProject-customer-container-learn';
  const response = (await importContainerGet(importContainerKey))?.body;

  const allImportContainers = (await importContainerGet())?.body;

  const latestCreatedImportContainer = (
    await importContainerGet()
  )?.body?.results?.pop();

  const secondLastImportContainer = (await importContainerGet())?.body
    ?.results?.[allImportContainers?.results?.length - 2];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created ImportContainer ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last ImportContainer Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedImportContainer?.createdAt}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {latestCreatedImportContainer?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedImportContainer?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">resourceType: </span>
          {latestCreatedImportContainer?.resourceType}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedImportContainer?.version}
        </p>
      </div>
      {/************* End of Created ImportContainer ***************/}

      {/************* Second Last Created ImportContainer ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last ImportContainer Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastImportContainer?.createdAt}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {secondLastImportContainer?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastImportContainer?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">resourceType: </span>
          {secondLastImportContainer?.resourceType}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastImportContainer?.version}
        </p>
      </div>
      {/************* End of Second Last Created ImportContainer ***************/}

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
          All ImportContainers in this project key:{' '}
          {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allImportContainers)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get ImportContainer Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {importContainerKey}
        </h3>
        <p>
          <span className="font-bold">createdAt: </span>
          {response?.createdAt}
        </p>
        <p>
          <span className="font-bold">key: </span> {response?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {response?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">resourceType: </span>
          {response?.resourceType}
        </p>
        <p>
          <span className="font-bold">version:</span> {response?.version}
        </p>
      </div>
      {/************* End of ID ***************/}
    </div>
  );
};

export default GetImportContainer;
