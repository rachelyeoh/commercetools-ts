import React from 'react';
import { productTypeGet } from './productTypeGet';

const GetProductType = async () => {
  const productTypeId = '87d372d4-e771-44ec-ae80-18cf432a3496';
  const response = (await productTypeGet('id', productTypeId))?.body;

  const productTypeKey = 'product-sets';
  const keyResponse = (await productTypeGet('key', productTypeKey))?.body;

  const allProductTypes = (await productTypeGet())?.body;

  const latestCreatedProductType = (
    await productTypeGet()
  )?.body?.results?.pop();

  const secondLastProductType = (await productTypeGet())?.body?.results?.[
    allProductTypes?.results?.length - 2
  ];

  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Product Type ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Product Type Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        {latestCreatedProductType?.attributes?.map((attribute) => (
          <>
            <p className="font-semibold text-orange-400">ATTRIBUTE:</p>
            <p>
              <span className="font-bold">attributeConstraint: </span>
              {JSON.stringify(attribute?.attributeConstraint)}
            </p>
            <p>
              <span className="font-bold">displayGroup: </span>
              {JSON.stringify(attribute?.displayGroup)}
            </p>
            <p>
              <span className="font-bold">inputHint: </span>
              {JSON.stringify(attribute?.inputHint)}
            </p>
            <p>
              <span className="font-bold">inputTip: </span>
              {JSON.stringify(attribute?.inputTip)}
            </p>
            <p>
              <span className="font-bold">isRequired: </span>
              {JSON.stringify(attribute?.isRequired)}
            </p>
            <p>
              <span className="font-bold">isSearchable: </span>
              {JSON.stringify(attribute?.isSearchable)}
            </p>
            <p>
              <span className="font-bold">label: </span>
              {JSON.stringify(attribute?.label)}
            </p>
            <p>
              <span className="font-bold">name: </span>
              {JSON.stringify(attribute?.name)}
            </p>
            <p>
              <span className="font-bold">type: </span>
              {JSON.stringify(attribute?.type)}
            </p>
            <p className="font-semibold text-orange-400">END OF ATTRIBUTE</p>
          </>
        ))}
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span>{' '}
          {latestCreatedProductType?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedProductType?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedProductType?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(latestCreatedProductType?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(latestCreatedProductType?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(latestCreatedProductType?.key)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedProductType?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedProductType?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedProductType?.name)}
        </p>
        <p>
          <span className="font-bold">version: </span>{' '}
          {latestCreatedProductType?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {latestCreatedProductType?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Product Type ***************/}

      {/************* Second Last Created Product Type ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Product Type Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        {secondLastProductType?.attributes?.map((attribute) => (
          <>
            <p className="font-semibold text-orange-400">ATTRIBUTE:</p>
            <p>
              <span className="font-bold">attributeConstraint: </span>
              {JSON.stringify(attribute?.attributeConstraint)}
            </p>
            <p>
              <span className="font-bold">displayGroup: </span>
              {JSON.stringify(attribute?.displayGroup)}
            </p>
            <p>
              <span className="font-bold">inputHint: </span>
              {JSON.stringify(attribute?.inputHint)}
            </p>
            <p>
              <span className="font-bold">inputTip: </span>
              {JSON.stringify(attribute?.inputTip)}
            </p>
            <p>
              <span className="font-bold">isRequired: </span>
              {JSON.stringify(attribute?.isRequired)}
            </p>
            <p>
              <span className="font-bold">isSearchable: </span>
              {JSON.stringify(attribute?.isSearchable)}
            </p>
            <p>
              <span className="font-bold">label: </span>
              {JSON.stringify(attribute?.label)}
            </p>
            <p>
              <span className="font-bold">name: </span>
              {JSON.stringify(attribute?.name)}
            </p>
            <p>
              <span className="font-bold">type: </span>
              {JSON.stringify(attribute?.type)}
            </p>
            <p className="font-semibold text-orange-400">END OF ATTRIBUTE</p>
          </>
        ))}
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span>{' '}
          {secondLastProductType?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastProductType?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastProductType?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(secondLastProductType?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(secondLastProductType?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(secondLastProductType?.key)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastProductType?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastProductType?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastProductType?.name)}
        </p>
        <p>
          <span className="font-bold">version: </span>{' '}
          {secondLastProductType?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {secondLastProductType?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Created Product Type ***************/}

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
          All Product Types in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allProductTypes)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Product Type Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {productTypeId}
        </h3>
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        {response?.attributes?.map((attribute) => (
          <>
            <p className="font-semibold text-orange-400">ATTRIBUTE:</p>
            <p>
              <span className="font-bold">attributeConstraint: </span>
              {JSON.stringify(attribute?.attributeConstraint)}
            </p>
            <p>
              <span className="font-bold">displayGroup: </span>
              {JSON.stringify(attribute?.displayGroup)}
            </p>
            <p>
              <span className="font-bold">inputHint: </span>
              {JSON.stringify(attribute?.inputHint)}
            </p>
            <p>
              <span className="font-bold">inputTip: </span>
              {JSON.stringify(attribute?.inputTip)}
            </p>
            <p>
              <span className="font-bold">isRequired: </span>
              {JSON.stringify(attribute?.isRequired)}
            </p>
            <p>
              <span className="font-bold">isSearchable: </span>
              {JSON.stringify(attribute?.isSearchable)}
            </p>
            <p>
              <span className="font-bold">label: </span>
              {JSON.stringify(attribute?.label)}
            </p>
            <p>
              <span className="font-bold">name: </span>
              {JSON.stringify(attribute?.name)}
            </p>
            <p>
              <span className="font-bold">type: </span>
              {JSON.stringify(attribute?.type)}
            </p>
            <p className="font-semibold text-orange-400">END OF ATTRIBUTE</p>
          </>
        ))}
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span> {response?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {response?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(response?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(response?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(response?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(response?.key)}
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
          <span className="font-bold">version: </span> {response?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {response?.versionModifiedAt}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Product Type Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {productTypeKey}
        </h3>
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        {keyResponse?.attributes?.map((attribute) => (
          <>
            <p className="font-semibold text-orange-400">ATTRIBUTE:</p>
            <p>
              <span className="font-bold">attributeConstraint: </span>
              {JSON.stringify(attribute?.attributeConstraint)}
            </p>
            <p>
              <span className="font-bold">displayGroup: </span>
              {JSON.stringify(attribute?.displayGroup)}
            </p>
            <p>
              <span className="font-bold">inputHint: </span>
              {JSON.stringify(attribute?.inputHint)}
            </p>
            <p>
              <span className="font-bold">inputTip: </span>
              {JSON.stringify(attribute?.inputTip)}
            </p>
            <p>
              <span className="font-bold">isRequired: </span>
              {JSON.stringify(attribute?.isRequired)}
            </p>
            <p>
              <span className="font-bold">isSearchable: </span>
              {JSON.stringify(attribute?.isSearchable)}
            </p>
            <p>
              <span className="font-bold">label: </span>
              {JSON.stringify(attribute?.label)}
            </p>
            <p>
              <span className="font-bold">name: </span>
              {JSON.stringify(attribute?.name)}
            </p>
            <p>
              <span className="font-bold">type: </span>
              {JSON.stringify(attribute?.type)}
            </p>
            <p className="font-semibold text-orange-400">END OF ATTRIBUTE</p>
          </>
        ))}
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span>{' '}
          {keyResponse?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {keyResponse?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(keyResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(keyResponse?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(keyResponse?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(keyResponse?.key)}
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
          <span className="font-bold">version: </span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetProductType;
