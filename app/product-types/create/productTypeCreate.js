import { apiRoot } from '../../../middleware/client';

export async function productTypeCreate(productTypeDraft) {
  try {
    const response = await apiRoot
      .productTypes()
      .post({ body: productTypeDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
