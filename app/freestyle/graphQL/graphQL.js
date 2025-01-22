# shift-option/alt-click on a query below to jump to it in the explorer
# option/alt-click on a field in the explorer to select all subfields
query queryOrdersForCustomers {
  orders(where: "createdAt > \"2016-10-01T00:00:00.000Z\"") {
    results {
      cart { country }
      customer {
        id
      }
      id
      createdAt
      totalPrice {
        currencyCode
        centAmount
      }
    }
  }
}

query queryOrdersGeneric($custId: String) {
  customer(id: $custId) {
    firstName
    lastName
  }
}