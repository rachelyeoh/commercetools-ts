import { apiRoot } from '../../../middleware/client';

export const customerGroupGet = async (method, uniqueKey) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .customerGroups() //endpoint
        .withId({ ID: uniqueKey })
        .get()
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .customerGroups() //endpoint
        .withKey({ key: uniqueKey })
        .get()
        .execute();
      // } else if (method === 'email') {
      //   response = await apiRoot
      //     .customerGroups() //endpoint
      //     .get({
      //       queryArgs: {
      //         where: `email="${uniqueKey}"`, //this is equivalent to GET https://api.{region}.commercetools.com/{projectKey}/customers/?where=email="getting-started@example.com"
      //         limit: 1,
      //       },
      //     })
      //     .execute();
      //if no result from the search, then default is returned: { "limit": 1, "offset": 0, "total": 0, "results": [] }
    } else {
      response = await apiRoot.customerGroups().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
