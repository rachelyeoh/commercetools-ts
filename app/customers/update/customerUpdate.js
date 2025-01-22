import { apiRoot } from '../../../middleware/client';

export const customerUpdate = async (method, uniqueKey, postBody) => {
  try {
    let response;
    if (method === 'id') {
      response = await apiRoot
        .customers() //endpoint
        .withId({ ID: uniqueKey })
        .post(postBody)
        .execute();
    } else if (method === 'key') {
      response = await apiRoot
        .customers() //endpoint
        .withKey({ key: uniqueKey })
        .post(postBody)
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
