import { apiRoot } from '../../../middleware/client';

export const productCategoryGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .categories() //endpoint
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .categories() //endpoint
        .withKey({ key: uniqueKey })
        .get()
        .execute();
      //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    } else {
      response = await apiRoot.categories().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
