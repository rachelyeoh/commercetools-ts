import React from 'react';
import { channelGet } from './channelGet';

const GetChannel = async () => {
  //need to check why order edits are not retrieved from get call, where new order edit created every time
  //because dryrun was true - its only a preview and doesn't create
  const channelId = '36ac929c-0a99-48d4-abde-ad938d5c640b';
  const response = (await channelGet('id', channelId))?.body;

  const channelKey = 'distribution-channel';
  const keyResponse = (await channelGet('key', channelKey))?.body;

  const allChannels = (await channelGet())?.body;
  const latestCreatedChannel = (await channelGet())?.body?.results?.pop();

  const secondLastChannel = (await channelGet())?.body?.results?.[
    allChannels?.results?.length - 2
  ];
  return (
    <div className="grid grid-cols-2 gap-5 m-10 justify-center align-middle text-center">
      {/************* Lastest Created Channel ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Last Channel Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(latestCreatedChannel?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(latestCreatedChannel?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(latestCreatedChannel?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {latestCreatedChannel?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {latestCreatedChannel?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {latestCreatedChannel?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(latestCreatedChannel?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(latestCreatedChannel?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(latestCreatedChannel?.roles)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {latestCreatedChannel?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {latestCreatedChannel?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Created Channel ***************/}

      {/* ************ Second Last Created Channel ***************/}
      <div className="ring-2 ring-green-400 rounded-2xl col-span-2">
        <h2 className="font-extrabold text-2xl my-5 bg-green-100">
          Second Last Channel Details
        </h2>
        {/* <h3 className="font-bold text-xl text-blue-400">
          Status Code: {response?.statusCode}
        </h3> */}
        <p>
          <span className="font-bold">createdAt: </span>
          {JSON.stringify(secondLastChannel?.createdAt)}
        </p>
        <p>
          <span className="font-bold">createdBy: </span>
          {JSON.stringify(secondLastChannel?.createdBy)}
        </p>
        <p>
          <span className="font-bold">description: </span>
          {JSON.stringify(secondLastChannel?.description)}
        </p>
        <p>
          <span className="font-bold">id: </span>
          {secondLastChannel?.id}
        </p>
        <p>
          <span className="font-bold">key: </span>
          {secondLastChannel?.key}
        </p>
        <p>
          <span className="font-bold">lastModifiedAt: </span>
          {secondLastChannel?.lastModifiedAt}
        </p>
        <p>
          <span className="font-bold">lastModifiedBy: </span>{' '}
          {JSON.stringify(secondLastChannel?.lastModifiedBy)}
        </p>
        <p>
          <span className="font-bold">name: </span>{' '}
          {JSON.stringify(secondLastChannel?.name)}
        </p>
        <p>
          <span className="font-bold">roles: </span>{' '}
          {JSON.stringify(secondLastChannel?.roles)}
        </p>
        <p>
          <span className="font-bold">version:</span>{' '}
          {secondLastChannel?.version}
        </p>
        <p>
          <span className="font-bold">versionModifiedAt:</span>{' '}
          {secondLastChannel?.versionModifiedAt}
        </p>
      </div>
      {/************* End of Second Last Channel ************** */}

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
          All Channel in this project key: {process.env.CTP_PROJECT_KEY}
        </h2>
        <h2>{JSON.stringify(allChannels)}</h2>
      </div>

      {/************* ID ***************/}
      <div className="ring-2 ring-blue-400 rounded-2xl">
        <h2 className="font-extrabold text-2xl my-5 bg-blue-100">
          Get Channel Details using Id
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Id being passed: {channelId}
        </h3>
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
          Get Channels Details using key
        </h2>
        <h3 className="font-bold text-xl text-blue-400">
          Key being passed: {channelKey}
        </h3>
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

export default GetChannel;
