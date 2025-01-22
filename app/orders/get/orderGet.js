import { apiRoot } from '../../../middleware/client';

export const orderGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .orders() //endpoint
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    }
    // else if (method === 'key') {
    //   response = await apiRoot
    //     .orders() //endpoint
    //     .withKey({ key: uniqueKey })
    //     .get()
    //     .execute();
    //   //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    // }
    else if (method === 'orderNumber') {
      response = await apiRoot
        .orders() //endpoint
        .withOrderNumber({ orderNumber: uniqueKey })
        .get()
        .execute();
      //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    } else {
      response = await apiRoot.orders().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
