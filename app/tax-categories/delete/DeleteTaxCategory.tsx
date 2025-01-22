import React from 'react';
import { taxCategoryDelete } from './taxCategoryDelete';

const idToDelete = '4b019215-af91-46e6-866b-60e5b497449a';

const queryParam = {
  queryArgs: {
    version: '1',
  },
};

const DeleteTaxCategory = async () => {
  const response = await taxCategoryDelete('id', idToDelete, queryParam);
  const responseBody = response?.body;

  return (
    <div className="grid grid-flow-col gap-5 m-10 justify-center align-middle text-center">
      <h2>{JSON.stringify(response)}</h2>
      {/************* Deleted Tax Category ***************/}
      <div className="ring-2 ring-red-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-yellow-100">
          Deleted Tax Category Details
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3>
        <p>
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
        </p>
        <p>
          <span className="font-bold">description: </span>{' '}
          {JSON.stringify(responseBody?.description)}
        </p>
        <p>
          <span className="font-bold">rates: </span>{' '}
          {JSON.stringify(responseBody?.rates)}
        </p>
      </div>
      {/************* End of Deleted Tax Category ***************/}
    </div>
  );
};

export default DeleteTaxCategory;
