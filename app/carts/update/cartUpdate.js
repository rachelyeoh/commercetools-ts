import { apiRoot } from '../../../middleware/client';

export const cartUpdate = async (method, uniqueKey, postBody) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .carts() //endpoint
        .withId({ ID: uniqueKey })
        .post(postBody)
        .execute();
    } else if (method === 'key') {
      //endpoint: POST -  /{projectKey}/customer-groups/key={key}
      response = await apiRoot
        .carts() //endpoint customer-groups
        .withKey({ key: uniqueKey }) //endpoint key={key}
        .post(postBody) //request type
        .execute();
      // } else if (method === 'email') {
      //   response = await apiRoot
      //     .customers() //endpoint
      //     .withEmailToken({ emailToken: uniqueKey })
      //     // .get({
      //     //   queryArgs: {
      //     //     where: `email="${uniqueKey}"`,
      //     //     limit: 1,
      //     //   },
      //     // })
      //     .post(postBody)
      //     .execute();
    }

    console.log(response);
    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
