import { apiRoot } from '../../../middleware/client';

export async function taxCategoryCreate(taxCategoryDraft) {
  try {
    const response = await apiRoot
      .taxCategories()
      .post({ body: taxCategoryDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
