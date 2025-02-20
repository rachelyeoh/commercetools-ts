import { apiRoot } from '../../../middleware/client';

export async function channelCreate(channelDraft) {
  try {
    const response = await apiRoot
      .channels()
      .post({ body: channelDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
