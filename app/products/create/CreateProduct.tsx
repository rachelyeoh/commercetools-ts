import React from 'react';
import { productCreate } from './productCreate';

const ProductPriceModeEnum = 'Standalone';

const StateResourceIdentifier = {
  id: 'ae55b9c1-8d2d-4cbf-be95-62c23c073ac0', //this state need to have type of 'ProductState' only it stop throwing error?
  typeId: 'state',
};

const SearchKeywords = {
  en: [{ text: 'Blue Jeans' }, { text: 'Pink Jeans' }],
};

const TaxCategoryResourceIdentifier = {
  id: '352abe1b-ec10-42e8-be40-de21006b5cef',
  typeId: 'tax-category',
};

//Need to do a get request to discount price first before using this in product
// const DiscountPriceDraft = {
//   value: {
//     currencyCode: 'USD',
//     centAmount: 4200,
//   },
//   discount: {
//     id: 'product-discount-loyalty',
//     typeId: 'product-discount',
//     obj: {
//         id: 'product-discount-loyalty-customer',
//         version: ''
//     }
//   }
// };

const PriceDraft = [
  {
    key: 'jeans-fixed-price',
    value: { currencyCode: 'USD', centAmount: 2000 },
    // discounted: DiscountPriceDraft,
  },
];

const MasterVariantDraft = {
  key: 'jeans-pink-no-brands',
  sku: 'pink-jeans-unbrandeds',
  prices: PriceDraft,
  attributes: [
    {
      name: 'Season',
      value: 'Light pink',
      //   value: {
      //     'en-US': 'Light pink',
      //   },
    },
  ],
};

const ProductVariantDraft = [
  //   MasterVariantDraft,
  {
    key: 'jeans-blues',
    sku: 'blue-jeans-brands',
    prices: PriceDraft,
    attributes: [
      {
        name: 'Season',
        // value: {
        //   'en-US': 'Light blue',
        // },
        value: 'Light blue',
      },
    ],
  },
];

const CategoryOrderHints = {
  '5e4b1db9-b0d8-4602-93dc-dedbbe0ae50b': '0.992',
};

const CategoryResourceIdentifier = [
  {
    id: '5e4b1db9-b0d8-4602-93dc-dedbbe0ae50b',
    typeId: 'category',
  },
];

const ProductTypeResourceIdentifier = {
  id: '4f35ca66-6e99-4603-a5f7-70f0a46c3014',
  typeId: 'product-type',
};

const productDraft = {
  key: 'women-jeans-tight',
  productType: ProductTypeResourceIdentifier,
  name: {
    en: 'Women Jeans tight', //localized string
  },
  slug: {
    en: 'women-jeans-tight',
  },
  description: { en: 'Women tight jeans with different colours' },
  categories: CategoryResourceIdentifier,
  categoryOrderHints: CategoryOrderHints,
  metaTitle: {
    en: 'Women tight jeans',
  },
  metaDescription: {
    en: 'Women tight jeans with different colours',
  },
  metaKeywords: {
    en: 'Women tight jeans',
  },
  masterVariant: MasterVariantDraft,
  variants: ProductVariantDraft,
  taxCategory: TaxCategoryResourceIdentifier,
  searchKeywords: SearchKeywords,
  //   state: StateResourceIdentifier,
  publish: true,
  priceMode: ProductPriceModeEnum,
};

const CreateProduct = async () => {
  const response = await productCreate(productDraft);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      {/* <h2>{JSON.stringify(response)}</h2> */}
      {/************* Created Product Type ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Product Type Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        {/* <p>
          <span className="font-bold">attributes: </span>
          {responseBody?.attributes}
        </p> */}
        <p className="font-semibold text-orange-600">ATTRIBUTES:</p>
        <p>
          <span className="font-bold">attributeConstraint: </span>
          {JSON.stringify(responseBody?.attributes?.attributeConstraint)}
        </p>
        <p>
          <span className="font-bold">displayGroup: </span>
          {JSON.stringify(responseBody?.attributes?.displayGroup)}
        </p>
        <p>
          <span className="font-bold">inputHint: </span>
          {JSON.stringify(responseBody?.attributes?.inputHint)}
        </p>
        <p>
          <span className="font-bold">isRequired: </span>
          {JSON.stringify(responseBody?.attributes?.isRequired)}
        </p>
        <p>
          <span className="font-bold">isSearchable: </span>
          {JSON.stringify(responseBody?.attributes?.isSearchable)}
        </p>
        <p>
          <span className="font-bold">label: </span>
          {JSON.stringify(responseBody?.attributes?.label)}
        </p>
        <p>
          <span className="font-bold">name: </span>
          {JSON.stringify(responseBody?.attributes?.name)}
        </p>
        <p>
          <span className="font-bold">type: </span>
          {JSON.stringify(responseBody?.attributes?.type)}
        </p>
        <p className="font-semibold text-orange-600">END OF ATTRIBUTES</p>
        <p>
          <span className="font-bold">classifier:</span>{' '}
          {responseBody?.classifier}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(responseBody?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {JSON.stringify(responseBody?.id)}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {JSON.stringify(responseBody?.key)}
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
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(responseBody?.name)}
        </p>
        <p>
          <span className="font-bold">version: </span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt: </span>{' '}
          {responseBody?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Product Type ***************/}
    </div>
  );
};

export default CreateProduct;
