import React from 'react';
import { customObjectCreate } from './customObjectCreate';

const customObjectDraft = {
  key: 'preferred-name',
  container: 'user-preference',
  value: 'Sally',
};

const CreateCustomObject = async () => {
  const response = await customObjectCreate(customObjectDraft);
  const responseBody: any = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Created Custom Object ***************/}
      <div className="ring-2 ring-yellow-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Created Custom Object Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        {Object.entries(responseBody).map(([key, value]) => {
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
      {/************* End of Created Custom Object ***************/}
    </div>
  );
};

export default CreateCustomObject;
