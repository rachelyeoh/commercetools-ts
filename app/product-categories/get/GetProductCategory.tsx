import React from 'react';
import { productCategoryGet } from './productCategoryGet';

const GetProductCategory = async () => {
  const productCategoryId = '5e4b1db9-b0d8-4602-93dc-dedbbe0ae50b';
  const response = (await productCategoryGet('id', productCategoryId))?.body;

  const productCategoryKey = 'rugs';
  const keyResponse = (await productCategoryGet('key', productCategoryKey))
    ?.body;

  const allProductCategories = (await productCategoryGet())?.body;
  const latestCreatedProductCategory = (
    await productCategoryGet()
  )?.body?.results?.pop();

  const secondLastProductCategory = (await productCategoryGet())?.body
    ?.results?.[allProductCategories?.results?.length - 2];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Product Category ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Product Category Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">ancestors: </span>
          {JSON.stringify(latestCreatedProductCategory?.ancestors)}
        </p>
        <p>
          <span className="font-bold">assets: </span>
          {JSON.stringify(latestCreatedProductCategory?.assets)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedProductCategory?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedProductCategory?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedProductCategory?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedProductCategory?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedProductCategory?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.key)}
        </p>
        <p>
          <span className="font-bold">orderHint: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.orderHint)}
        </p>
        <p>
          <span className="font-bold">parent: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.parent)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(latestCreatedProductCategory?.slug)}
        </p>
      </div>
      {/************* End of Created Tax Category ***************/}

      {/* ************ Second Last Created Tax Category ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Product Category Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">ancestors: </span>
          {JSON.stringify(secondLastProductCategory?.ancestors)}
        </p>
        <p>
          <span className="font-bold">assets: </span>
          {JSON.stringify(secondLastProductCategory?.assets)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastProductCategory?.id}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastProductCategory?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastProductCategory?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastProductCategory?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastProductCategory?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.key)}
        </p>
        <p>
          <span className="font-bold">orderHint: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.orderHint)}
        </p>
        <p>
          <span className="font-bold">parent: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.parent)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(secondLastProductCategory?.slug)}
        </p>
      </div>
      {/************* End of Second Last Created Product Category ************** */}

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
          All product category in this project key:{' '}
          {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allProductCategories)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Product Category Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {productCategoryId}
        </h3>
        <p>
          <span className="font-bold">ancestors: </span>
          {JSON.stringify(response?.ancestors)}
        </p>
        <p>
          <span className="font-bold">assets: </span>
          {JSON.stringify(response?.assets)}
        </p>
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span> {response?.key}
        </p>
        <p>
          <span className="font-bold">orderHint: </span>{' '}
          {JSON.stringify(response?.orderHint)}
        </p>
        <p>
          <span className="font-bold">parent: </span>{' '}
          {JSON.stringify(response?.parent)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(response?.slug)}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Product Category Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {productCategoryKey}
        </h3>
        <p>
          <span className="font-bold">ancestors: </span>
          {JSON.stringify(keyResponse?.ancestors)}
        </p>
        <p>
          <span className="font-bold">assets: </span>
          {JSON.stringify(keyResponse?.assets)}
        </p>
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.name)}
        </p>
        <p>
          <span className="font-bold">key: </span> {keyResponse?.key}
        </p>
        <p>
          <span className="font-bold">orderHint: </span>{' '}
          {JSON.stringify(keyResponse?.orderHint)}
        </p>
        <p>
          <span className="font-bold">parent: </span>{' '}
          {JSON.stringify(keyResponse?.parent)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(keyResponse?.slug)}
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetProductCategory;
