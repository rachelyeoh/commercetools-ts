import React from 'react';
import { productGet } from './productGet';

const GetProduct = async () => {
  const productId = 'b065613a-c6b0-42cf-ad95-dd51684a9232';
  const response = (await productGet('id', productId))?.body;

  const productKey = 'women-jeans-tight';
  const keyResponse = (await productGet('key', productKey))?.body;

  const allProducts = (await productGet())?.body;
  const latestCreatedProduct = (await productGet())?.body?.results?.pop();

  const secondLastProduct = (await productGet())?.body?.results?.[
    allProducts?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Product ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Product Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {latestCreatedProduct?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedProduct?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.key)}
        </p>
        <p>
          <span className="font-bold">lastMessageSequenceNumber: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedProduct?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lastVariantId: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.lastVariantId)}
        </p>
        <p className="font-semibold text-orange-600">MASTER DATA:</p>
        {/* <p>
          <span className="font-bold">masterData: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData)}
        </p> */}
        <p>
          <span className="font-bold">hasStagedChanges: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.hasStagedChanges)}
        </p>
        <p>
          <span className="font-bold">published: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.published)}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Current </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.categories
          )}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.categoryOrderHints
          )}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant
              ?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.id
          )}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant?.sku
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.current?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.searchKeywords
          )}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.current?.slug)}
        </p>
        <p>
          <span className="font-bold">variant: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.current?.variant)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Current{' '}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Staged </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.staged?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.categoryOrderHints
          )}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant
              ?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.id
          )}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant?.sku
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.staged?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.searchKeywords
          )}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.staged?.slug)}
        </p>
        <p>
          <span className="font-bold">variants: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData?.staged?.variants)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Staged{' '}
        </p>
        <p className="font-semibold text-orange-600">End of MASTER DATA</p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedProduct?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedProduct?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Product***************/}

      {/* ************ Second Last Created Product ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Product Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {secondLastProduct?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(secondLastProduct?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastProduct?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(secondLastProduct?.key)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(secondLastProduct?.lastMessageSequenceNumber)}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastProduct?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastProduct?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">lastVariantId: </span>{' '}
          {JSON.stringify(secondLastProduct?.lastVariantId)}
        </p>
        <p className="font-semibold text-orange-600">MASTER DATA:</p>
        {/* <p>
          <span className="font-bold">masterData: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData)}
        </p> */}
        <p>
          <span className="font-bold">hasStagedChanges: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.hasStagedChanges)}
        </p>
        <p>
          <span className="font-bold">published: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.published)}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Current </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.current?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.categoryOrderHints
          )}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.id
          )}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.masterVariant?.sku
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.current?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.current?.searchKeywords
          )}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.current?.slug)}
        </p>
        <p>
          <span className="font-bold">variant: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.current?.variant)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Current{' '}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Staged </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.staged?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.categoryOrderHints
          )}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.id
          )}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.masterVariant?.sku
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.staged?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(
            secondLastProduct?.masterData?.staged?.searchKeywords
          )}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.staged?.slug)}
        </p>
        <p>
          <span className="font-bold">variants: </span>{' '}
          {JSON.stringify(secondLastProduct?.masterData?.staged?.variants)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Staged{' '}
        </p>
        <p className="font-semibold text-orange-600">End of MASTER DATA</p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastProduct?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastProduct?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Created Product ************** */}

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
          All product category in this project key: - comment out to see
          {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allProducts)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Product Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {productId}
        </h3>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {response?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(response?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(response?.key)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
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
          <span className="font-bold">lastVariantId: </span>{' '}
          {JSON.stringify(response?.lastVariantId)}
        </p>
        <p className="font-semibold text-orange-600">MASTER DATA:</p>
        {/* <p>
          <span className="font-bold">masterData: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData)}
        </p> */}
        <p>
          <span className="font-bold">hasStagedChanges: </span>{' '}
          {JSON.stringify(response?.masterData?.hasStagedChanges)}
        </p>
        <p>
          <span className="font-bold">published: </span>{' '}
          {JSON.stringify(response?.masterData?.published)}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Current </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.categoryOrderHints)}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            response?.masterData?.current?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            response?.masterData?.current?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            response?.masterData?.current?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.masterVariant?.assets)}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            response?.masterData?.current?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            response?.masterData?.current?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.masterVariant?.id)}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.masterVariant?.images)}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.masterVariant?.prices)}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.masterVariant?.sku)}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.searchKeywords)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.slug)}
        </p>
        <p>
          <span className="font-bold">variant: </span>{' '}
          {JSON.stringify(response?.masterData?.current?.variant)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Current{' '}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Staged </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.categoryOrderHints)}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.description?.['en-US'])}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.description?.['en-GB'])}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.description?.['de-DE'])}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.masterVariant?.assets)}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            response?.masterData?.staged?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            response?.masterData?.staged?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.masterVariant?.id)}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.masterVariant?.images)}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.masterVariant?.prices)}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.masterVariant?.sku)}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.searchKeywords)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.slug)}
        </p>
        <p>
          <span className="font-bold">variants: </span>{' '}
          {JSON.stringify(response?.masterData?.staged?.variants)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Staged{' '}
        </p>
        <p className="font-semibold text-orange-600">End of MASTER DATA</p>
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
          Get Product Category Details using Key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {productKey}
        </h3>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {keyResponse?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(keyResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
          {JSON.stringify(keyResponse?.key)}
        </p>
        <p>
          <span className="font-bold">key: </span>{' '}
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
          <span className="font-bold">lastVariantId: </span>{' '}
          {JSON.stringify(keyResponse?.lastVariantId)}
        </p>
        <p className="font-semibold text-orange-600">MASTER DATA:</p>
        {/* <p>
          <span className="font-bold">masterData: </span>{' '}
          {JSON.stringify(latestCreatedProduct?.masterData)}
        </p> */}
        <p>
          <span className="font-bold">hasStagedChanges: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.hasStagedChanges)}
        </p>
        <p>
          <span className="font-bold">published: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.published)}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Current </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.categoryOrderHints)}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.current?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.masterVariant?.id)}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.current?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.masterVariant?.sku)}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Current -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.searchKeywords)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.slug)}
        </p>
        <p>
          <span className="font-bold">variant: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.current?.variant)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Current{' '}
        </p>
        <p className="font-normal text-orange-400">MASTER DATA -- Staged </p>
        <p>
          <span className="font-bold">categories: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.categories)}
        </p>
        <p>
          <span className="font-bold">categoryOrderHints: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.categoryOrderHints)}
        </p>
        {/* <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.description
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Description{' '}
        </p>
        <p>
          <span className="font-bold">en-US: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.description?.['en-US']
          )}
        </p>
        <p>
          <span className="font-bold">en-GB: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.description?.['en-GB']
          )}
        </p>
        <p>
          <span className="font-bold">de-DE: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.description?.['de-DE']
          )}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Description{' '}
        </p>
        {/* <p>
          <span className="font-bold">masterVariant: </span>{' '}
          {JSON.stringify(
            latestCreatedProduct?.masterData?.staged?.masterVariant
          )}
        </p> */}
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">assets: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.masterVariant?.assets
          )}
        </p>
        <p>
          <span className="font-bold">attributes: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.masterVariant?.attributes
          )}
        </p>
        <p>
          <span className="font-bold">availability: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.masterVariant?.availability
          )}
        </p>
        <p>
          <span className="font-bold">id: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.masterVariant?.id)}
        </p>
        <p>
          <span className="font-bold">images: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.masterVariant?.images
          )}
        </p>
        <p>
          <span className="font-bold">prices: </span>{' '}
          {JSON.stringify(
            keyResponse?.masterData?.staged?.masterVariant?.prices
          )}
        </p>
        <p>
          <span className="font-bold">sku: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.masterVariant?.sku)}
        </p>
        <p className="font-normal text-orange-200">
          MASTER DATA -- Staged -- End of Master Variant{' '}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.name)}
        </p>
        <p>
          <span className="font-bold">searchKeywords: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.searchKeywords)}
        </p>
        <p>
          <span className="font-bold">slug: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.slug)}
        </p>
        <p>
          <span className="font-bold">variants: </span>{' '}
          {JSON.stringify(keyResponse?.masterData?.staged?.variants)}
        </p>
        <p className="font-normal text-orange-400">
          MASTER DATA -- End of Staged{' '}
        </p>
        <p className="font-semibold text-orange-600">End of MASTER DATA</p>
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

export default GetProduct;
