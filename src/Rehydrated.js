import React, { useContext, useEffect, useState } from 'react';
import { getApolloContext } from 'react-apollo';
import AWSAppSyncClient from 'aws-appsync';

export const Rehydrated = ({ children }) => {
  const { client } = useContext(getApolloContext());
  const [rehydrated, setState] = useState(false);

  useEffect(() => {
    if (client instanceof AWSAppSyncClient) {
      (async () => {
        await client.hydrated();
        setState(true);
      })();
    }
  }, [client]);
  return rehydrated ? <>{children}</> : null;
};

export default Rehydrated;


//For Error Unhandled Rejection (TypeError): this.context.client is undefined