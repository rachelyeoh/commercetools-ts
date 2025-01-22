import { apiRoot } from '../../../middleware/client';

export const productTypeGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .productTypes() //endpoint
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .productTypes() //endpoint
        .withKey({ key: uniqueKey })
        .get()
        .execute();
    } else {
      response = await apiRoot.productTypes().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
