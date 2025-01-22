import { apiRoot } from '../../../middleware/client';

export const shippingMethodGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .shippingMethods()
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .shippingMethods()
        .withKey({ key: uniqueKey })
        .get()
        .execute();
      //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    } else {
      response = await apiRoot.shippingMethods().get().execute();
    }

    // console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
