import React from 'react';
import { taxCategoryGet } from './taxCategoryGet';

const GetTaxCategory = async () => {
  const taxCategoryId = '352abe1b-ec10-42e8-be40-de21006b5cef';
  const response = (await taxCategoryGet('id', taxCategoryId))?.body;

  const taxCategoryKey = 'standard-tax';
  const keyResponse = (await taxCategoryGet('key', taxCategoryKey))?.body;

  const allTaxCategories = (await taxCategoryGet())?.body;
  const latestCreatedTaxCategory = (
    await taxCategoryGet()
  )?.body?.results?.pop();

  const secondLastTaxCategory = (await taxCategoryGet())?.body?.results?.[
    allTaxCategories?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Tax Category ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Tax Category Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedTaxCategory?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedTaxCategory?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedTaxCategory?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedTaxCategory?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedTaxCategory?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.key)}
        </p>
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(latestCreatedTaxCategory?.rates)}
        </p>
      </div>
      {/************* End of Created Tax Category ***************/}

      {/* ************ Second Last Created Tax Category ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Tax Category Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">id: </span>
          {secondLastTaxCategory?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastTaxCategory?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastTaxCategory?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastTaxCategory?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastTaxCategory?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.key)}
        </p>
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(secondLastTaxCategory?.rates)}
        </p>
      </div>
      {/************* End of Second Last Created Tax Category ************** */}

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
          All tax category in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allTaxCategories)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Tax Category Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {taxCategoryId}
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
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(response?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(response?.rates)}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Tax Category Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {taxCategoryKey}
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
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(keyResponse?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(keyResponse?.rates)}
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetTaxCategory;
