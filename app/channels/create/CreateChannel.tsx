import React from 'react';
import { channelCreate } from './channelCreate';

const baseAddress = {
  //It is not recommended to set id manually since the API overwrites this ID when creating an Address for a Customer. Use key instead and omit this field from the request to let the API generate the ID for the Address.
  key: 'import-warehouse-address',
  country: 'US',
  streetName: '',
  streetNumber: '2734 Travis Street',
  additionalStreetInfo:
    'Warehouse door can be accessed from the back of the street',
  postalCode: '32958',
  city: 'Sebastian',
  state: 'Florida',
  company: 'Import Clothes Ltd',
  phone: '772-589-2919',
};

const exportChannelDraft = {
  key: 'export-channel',
  roles: ['OrderExport'],
  name: { en: 'Export Channel' },
  description: {
    en: 'Export channel to include products that are exported to overseas',
  },
  address: baseAddress,
  custom: {
    type: {
      id: '00eca376-94f8-4ed4-baf3-c68f738be137',
      typeId: 'type',
    },
  },
};

const channelDraft = {
  key: 'import-channel',
  roles: ['OrderImport', 'Primary'],
  name: { en: 'Import Channel' },
  description: {
    en: 'Import channel to include products that are imported from overseas',
  },
  address: baseAddress,
  custom: {
    type: {
      id: '00eca376-94f8-4ed4-baf3-c68f738be137',
      typeId: 'type',
    },
  },
};

const CreateChannel = async () => {
  const response = await channelCreate(exportChannelDraft);
  const responseBody: any = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Custom Object ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Channel Details
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
        {/* <p>
          <span className="font-bold">id: </span>
          {responseBody?.id}
        </p>
        <p>
          <span className="font-bold">version:</span> {responseBody?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {responseBody?.versionModifiedAt}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {responseBody?.createdAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {responseBody?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(responseBody?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>{' '}
          {JSON.stringify(responseBody?.createdBy)}
        </p>
        <p>
          <span className="font-bold">name: </span> {responseBody?.name}
        </p>
        <p>
          <span className="font-bold">key: </span> {responseBody?.key}
        </p> */}
      </div>
      {/************* End of Created Channel ***************/}
    </div>
  );
};

export default CreateChannel;
