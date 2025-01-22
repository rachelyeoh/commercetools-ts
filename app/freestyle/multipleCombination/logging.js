/* Configure the Logger Middleware inside your API client and integrate it with your desired logging solution */
const customLoggerMiddleware = {
  logLevel: 'debug',
  httpMethods: ['POST', 'GET'],
  maskSensitiveData: true,
  logger: (method, ...args) => {
    console.log(`[CUSTOM LOGGER] ${method}`, ...args);
  },
};

async function fetchCustomer(customerKey) {
  try {
    const customerResponse = await apiRoot
      .customers()
      .withKey({ key: customerKey })
      .get()
      .execute();
    return customerResponse.body;
  } catch (error) {
    // The error will be logged by the commercetools SDK logging middleware
    // Re-throw the error for handling at a higher level
    throw error;
  }
}
