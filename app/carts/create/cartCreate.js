import { apiRoot } from '../../../middleware/client';

export async function cartCreate(cartDraft) {
  try {
    const response = await apiRoot.carts().post({ body: cartDraft }).execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
