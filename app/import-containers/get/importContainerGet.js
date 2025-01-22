import { importApiRoot } from '../../../middleware/client';

export async function importContainerGet(importContainerKey) {
  try {
    let response;
    if (importContainerKey) {
      response = await importApiRoot
        .importContainers()
        .withImportContainerKeyValue({ importContainerKey: importContainerKey })
        .get()
        .execute();
    } else {
      response = await importApiRoot.importContainers().get().execute();
    }
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
