assignCustomerToCustomerGroup(customerDraft.key!, "vip-customers")
    .then(log)
    .catch(
      // Handle the error, create objects that the following computation can handle
    );


import { apiRoot } from "../impl/apiClient.js"; // Update to map to your API root


const customerKey = "abcdefghijklm";
const customerGroupId = "silver";
const customerVersion = 1;


async function customerUpdateGroup(customerKey, customerGroupId, version) {
  // Wrap code in a Try/ Catch
 /**
 * Fetches a customer by their key.
 * @param {string} customerKey - The key of the customer to fetch.
 * @returns {Promise<object>} A Promise that resolves with the customer object.
 * @throws {Error} If the customer cannot be fetched.
 */
async function fetchCustomer(customerKey) {
  try {
    const customerResponse = await apiRoot
      .customers()
      .withKey({ key: customerKey })
      .get()
      .execute();
    return customerResponse.body;
  } catch (error) {
    // Log the error for debugging purposes
    console.log(JSON.stringify(error, null, 2));
    // Re-throw the error for handling at a higher level
    throw error;
  }
}

/**
 * Updates a customer's group.
 * @param {string} customerKey - The key of the customer to update.
 * @param {string} customerGroupId - The ID of the customer group to assign.
 * @param {number} customerVersion - The version of the customer being updated.
 * @returns {Promise<object>} A Promise that resolves with the updated customer object.
 * @throws {Error} If the customer group cannot be updated.
 */
async function updateCustomerGroup(customerKey, customerGroupId, customerVersion) {
  try {
    const updateResponse = await apiRoot
      .customers()
      .withKey({ key: customerKey })
      .post({
        body: {
          version: customerVersion,
          actions: [
            {
              action: "setCustomerGroup",
              customerGroup: { key: customerGroupId },
            },
          ],
        },
      })
      .execute();
    return updateResponse.body;
  } catch (error) {
    // Log the error for debugging purposes
    console.log(JSON.stringify(error, null, 2));
    // Re-throw the error for handling at a higher level
    throw error;
  }
}

/**
 * Fetches a customer and updates their customer group.
 * @param {string} customerKey - The key of the customer to update.
 * @param {string} customerGroupId - The ID of the customer group to assign.
 * @throws {Error} If the customer cannot be fetched or the group cannot be updated.
 * This error could occur if the customer key or group ID is invalid,
 * or if there are issues connecting to the commercetools API.
 */
async function customerUpdateGroupCombine(customerKey, customerGroupId) {
  try {
    const customer = await fetchCustomer(customerKey);
    const customerUpdate = await updateCustomerGroup(customerKey, customerGroupId, customer.version);
    console.log("Customer group updated successfully:", JSON.stringify(customerUpdate, null, 2));

  } catch (error) {
    // Log the error for debugging purposes
    console.log(JSON.stringify(error, null, 2));
    // Consider more robust error handling in a production environment,
    // such as logging to an error tracking service or displaying a user-friendly message.
  }
}

customerUpdateGroupCombine(customerKey, customerGroupId);

