import React from 'react';
import { typeCreate } from './typeCreate';

const fieldDefinitions = [
  {
    type: {
      name: 'Enum',
      values: [
        {
          key: 'leather-shoe',
          label: 'Leather Shoe Size',
        },
        {
          key: 'sport-shoe',
          label: 'Sport Shoe Size',
        },
      ],
    },
    name: 'preferredShoeSize',
    label: {
      en: 'Preferred shoe size',
    },
    required: false,
    inputHint: 'SingleLine',
  },
];

const typeDraft = {
  key: 'customer-preferredShoeSize',
  name: { en: 'Additional field to store preferred shoe size' },
  resourceTypeIds: ['customer'],
  fieldDefinitions: fieldDefinitions,
};

const CreateType = async () => {
  const response = await typeCreate(typeDraft);
  const responseBody: any = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Type ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Type Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        {responseBody &&
          Object.entries(responseBody).map(([key, value]) => {
            return (
              <div key={key}>
                <p className="font-bold">
                  {JSON.stringify(key)} :
                  <span className="font-normal">{JSON.stringify(value)}</span>
                </p>
              </div>
            );
          })}
      </div>
      {/************* End of Created Type ***************/}
    </div>
  );
};

export default CreateType;
