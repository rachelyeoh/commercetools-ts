import { importApiRoot } from '../../../middleware/client';

export async function importContainerCreate(importContainerDraft) {
  try {
    const response = await importApiRoot
      .importContainers()
      .post({ body: importContainerDraft })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
