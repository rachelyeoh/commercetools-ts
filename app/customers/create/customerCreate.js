import { apiRoot } from '../../../middleware/client';

export async function customerCreate(customerDraft) {
  try {
    const response = await apiRoot
      .customers()
      .post({ body: customerDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
