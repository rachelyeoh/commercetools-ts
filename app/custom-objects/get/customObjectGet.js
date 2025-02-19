import { apiRoot } from '../../../middleware/client';

export const customObjectGet = async (method, container, uniqueKey) => {
  try {
    let response;
    if (method === 'container') {
      response = await apiRoot
        .customObjects() //endpoint
        .withContainer({ container: container })
        .get()
        .execute();
    } else if (method === 'containerAndKey') {
      response = await apiRoot
        .customObjects() //endpoint
        .withContainerAndKey({ container: container, key: uniqueKey })
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
      console.log('no response');
      //   response = await apiRoot.customObjects().get().execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
