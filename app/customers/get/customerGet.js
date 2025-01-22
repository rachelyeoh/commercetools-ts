import { apiRoot } from '../../../middleware/client';

export const customerGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .customers() //endpoint
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .customers() //endpoint
        .withKey({ key: uniqueKey })
        .get()
        .execute();
    } else if (method === 'email') {
      response = await apiRoot
        .customers() //endpoint
        .get({
          queryArgs: {
            where: `email="${uniqueKey}"`, //this is equivalent to GET https://api.{region}.commercetools.com/{projectKey}/customers/?where=email="getting-started@example.com"
            limit: 1,
          },
        })
        .execute();
      //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    } else {
      response = await apiRoot.customers().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
