import { apiRoot } from '../../../middleware/client';

export async function customerGroupCreate(customerGroupDraft) {
  try {
    const response = await apiRoot
      .customerGroups()
      .post({ body: customerGroupDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
