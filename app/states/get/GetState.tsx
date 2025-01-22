import React from 'react';
import { stateGet } from './stateGet';

const GetState = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const stateId = 'ae55b9c1-8d2d-4cbf-be95-62c23c073ac0';
  const response = (await stateGet('id', stateId))?.body;

  const stateKey = 'Initial';
  const keyResponse = (await stateGet('key', stateKey))?.body;

  const allStates = (await stateGet())?.body;
  const latestCreatedState = (await stateGet())?.body?.results?.pop();

  const secondLastState = (await stateGet())?.body?.results?.[
    allStates?.results?.length - 2 //there is only 1 state created, hence 2nd is blank
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created State ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last State Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">builtIn: </span>
          {JSON.stringify(latestCreatedState?.builtIn)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedState?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedState?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(latestCreatedState?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedState?.id}
        </p>
        <p>
          <span className="font-bold">initial: </span>
          {latestCreatedState?.initial}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedState?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedState?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedState?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedState?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(latestCreatedState?.roles)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(latestCreatedState?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedState?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedState?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created State ***************/}

      {/* ************ Second Last Created State ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last State Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">builtIn: </span>
          {JSON.stringify(secondLastState?.builtIn)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastState?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastState?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(secondLastState?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastState?.id}
        </p>
        <p>
          <span className="font-bold">initial: </span>
          {secondLastState?.initial}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastState?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastState?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastState?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastState?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(secondLastState?.roles)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(secondLastState?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {secondLastState?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastState?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last State ************** */}

      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(response)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(keyResponse)}</h2>
      </div> */}
      {/* <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2>{JSON.stringify(emailResponse)}</h2>
      </div> */}
      <div className="ring-2 ring-blue-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          All State in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allStates)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get State Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {stateId}
        </h3>
        <p>
          <span className="font-bold">builtIn: </span>
          {JSON.stringify(response?.builtIn)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(response?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(response?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(response?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {response?.id}
        </p>
        <p>
          <span className="font-bold">initial: </span>
          {response?.initial}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {response?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {response?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(response?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(response?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(response?.roles)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(response?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {response?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {response?.versionModifiedAt}
        </p>
      </div>
      {/************* End of ID ***************/}

      {/************* Key ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get States Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {stateKey}
        </h3>
        <p>
          <span className="font-bold">builtIn: </span>
          {JSON.stringify(keyResponse?.builtIn)}
        </p>
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(keyResponse?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(keyResponse?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(keyResponse?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {keyResponse?.id}
        </p>
        <p>
          <span className="font-bold">initial: </span>
          {keyResponse?.initial}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {keyResponse?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {keyResponse?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(keyResponse?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(keyResponse?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(keyResponse?.roles)}
        </p>
        <p>
          <span className="font-bold">type: </span>{' '}
          {JSON.stringify(keyResponse?.type)}
        </p>
        <p>
          <span className="font-bold">version:</span> {keyResponse?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {keyResponse?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Key ***************/}
    </div>
  );
};

export default GetState;
