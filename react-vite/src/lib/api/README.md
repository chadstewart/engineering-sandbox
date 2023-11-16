# API Layer

This is the API Layer for this project. When building APIs for internal or external services, they should be added here as functions to make them easily callable in the application.

## Example REST API Function

```TypeScript
//filename: lib/api/rest/'internal or external api'/example-api.ts

import zod from "zod";
import api from "@/lib/api/config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchExampleRequest = async () => {
  const data = await api.get(
    zod.any(),
    "https://restcountries.com/v2/all"
  );
  return data;
};

export const fetchPostExampleRequest = async (exampleRequest: *Request types*) => {
  const requestBody = exampleRequest;
  const data = await api.post(
    zod.any(),
    "https://restcountries.com/v2/all",
    requestBody,
    CONFIG
  );
  return data;
};
```

## Example GraphQL API Function

```TypeScript
//filename: lib/api/graphql/'internal or external api'/example-api.ts

import zod from "zod";
import api from "@/lib/api/config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const testQuery = async (exampleRequest: *Request types*) => {
  /*
  An example request:

  const requestBody = {
    operationName: "GetOrders",
    query: `query GetOrders($authorization: String!) {
      getOrders(authorization: $authorization) {
        order_id
      }
    }
  */
 
  const requestBody = {
    operationName: "exampleOperation",
    query: exampleRequest,
    variables: {
      authorization: "test"
    }
  };

  const data = api.post(
    zod.object({
      data: zod.object({
        getOrders: zod.object({
          order_id: zod.string()
        }).array()
      })
    }),
    `http://apiurl.com/graphql`,
    requestBody,
    CONFIG
  );

  return data; 
};
```

## API Function Template

```TypeScript
import zod from "zod";
import api from "@/lib/api/config/api";

const CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const nameOfFunctionHere = async () => {
  const data = await api.get(
    zod.any(),
    ``
  );
  return data;
};
```

## Types

If types need to be used in the API, if they are only for the API then they should be added to the API folder under a 'util' folder. Otherwise, they need to be added to the main types folder for the application.

```TypeScript
//filename: lib/api/util/'type-name'.ts

readonly interface Countries {
  name: string;
  topLeveDomain: string[];
  alpha2Code: string;
  ...etc
}
```

## Example of API Function Usage

API Functions can be called in Components directly or called in React Custom Hooks. This project uses `Tanstack Query` to help with data-fetching and displaying the fetched data.

Tanstack Query works with both REST API & GraphQL queries without any specific configuration for either.

```tsx
//filename: /component/example-usage-component.ts

import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/atoms/button/button'
import { useQuery } from '@tanstack/react-query'
import { testQuery } from '@/lib/api/graphql/internal-apis/test'

function Test() {
  const [count, setCount, error] = useState(0)

  const { data, isLoading } = useQuery({
    queryKey: ['responseData'],
    queryFn: testQuery
  });

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Ohh crud...</p>}
        {data && <p>Data: {data?.getOrders.order_id}</p>}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Test

```

## References for building this API Layer

[Video](https://www.youtube.com/watch?v=DMB7YUSckys)

[GitHub Repo](https://github.com/ThomasFindlay/react-api-workshop)
