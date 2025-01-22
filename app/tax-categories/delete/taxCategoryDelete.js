import { apiRoot } from '../../../middleware/client';

export const taxCategoryDelete = async (method, uniqueKey, queryParam) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .taxCategories() //endpoint
        .withId({ ID: uniqueKey })
        .delete(queryParam)
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .taxCategories() //endpoint
        .withKey({ key: uniqueKey })
        .delete(queryParam)
        .execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
