/*

A typical example could be the assignment of a Customer to a Customer Group. Here, you would in a realistic scenario perform three requests:
You fetch the Customer.
You fetch the Customer Group.
Then you assign the Customer to the Customer Group.
Translating this into our CRUD requests we would have to perform
A GET request to the Customers endpoint.
A GET request to the Customer Groups endpoint.
A POST request to the Customers endpoint.

*/

const customerKey = 'thomas-tools';
const customerGroupId = 'gold';

async function fetchCustomer(customerKey) {
  const customerResponse = await apiRoot
    .customers()
    .withKey({ key: customerKey })
    .get()
    .execute();
  return customerResponse.body;
}

async function updateCustomerGroup(
  customerKey,
  customerGroupId,
  customerVersion
) {
  const updateResponse = await apiRoot
    .customers()
    .withKey({ key: customerKey })
    .post({
      body: {
        version: customerVersion,
        actions: [
          {
            action: 'setCustomerGroup',
            customerGroup: { key: customerGroupId },
          },
        ],
      },
    })
    .execute();
  return updateResponse.body;
}

async function customerUpdateGroupCombine(customerKey, customerGroupId) {
  const customer = await fetchCustomer(customerKey);
  const customerUpdate = await updateCustomerGroup(
    customerKey,
    customerGroupId,
    customer.version //grabbing version from first fetch request
  );
  console.log(
    'Customer group updated successfully:',
    JSON.stringify(customerUpdate, null, 2)
  );
}

customerUpdateGroupCombine(customerKey, customerGroupId);
