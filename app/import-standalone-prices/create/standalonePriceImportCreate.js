import { importApiRoot } from '../../../middleware/client';

export async function standalonePriceImportCreate(
  importContainerKey,
  productImportRequest
) {
  try {
    const response = await importApiRoot
      .standalonePrices()
      .importContainers()
      .withImportContainerKeyValue({ importContainerKey: importContainerKey })
      .post({ body: productImportRequest })
      .execute();
    console.log(response);

    return response;
    // console.log('Success', JSON.stringify(response.body, null, 2));
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
}
