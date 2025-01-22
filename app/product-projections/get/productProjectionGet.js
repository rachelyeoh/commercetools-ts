import { apiRoot } from '../../../middleware/client';

export const productProjectionGet = async (method) => {
  try {
    let response;
    if (method === 'search') {
      response = await apiRoot
        .productProjections() //endpoint
        .search()
        .get({ queryArgs: { staged: true, limit: '2' } }) // https://docs.commercetools.com/api/projects/products-search#query-parameters
        .execute();
    } else if (method === 'predicate') {
      response = await apiRoot
        .productProjections()
        .search()
        .get({
          queryArgs: {
            // where: 'categories(id="cd877ac8-7794-4635-bbce-df73c4f6d48b")', //Available fields are: `categories`, `categoryOrderHints`, `createdAt`, `createdBy`, `description`, `hasStagedChanges`, `id`, `key`, `lastModifiedAt`, `lastModifiedBy`, `masterVariant`, `metaDescription`, `metaKeywords`, `metaTitle`, `name`, `productType`, `published`, `reviewRatingStatistics`, `searchKeywords`, `slug`, `state`, `taxCategory`, `variants`, `version`."
            limit: '2',
            'text.en-US': 'Bed',
          },
        })
        .execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
