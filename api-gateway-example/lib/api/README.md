# API Layer

This is the API Layer for this project. When building APIs for internal or external services, they should be added here as functions to make them easily callable in the application.

## Example API Function

```TypeScript
//filename: lib/api/'internal or external api'/example-api.ts

import zod from "zod";
import api from "../config/api";

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
  const requestBody = JSON.stringify(exampleRequest);
  const data = await api.post(
    zod.any(),
    "https://restcountries.com/v2/all",
    requestBody,
    CONFIG
  );
  return data;
};
```

## API Function Template

```TypeScript
import zod from "zod";
import api from "../../config/api";

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

While API functions can be called anywhere, they'll typically live in a controller or wherever business logic is written.

```TypeScript
//filename: v(*)/controllers/example-usage-controller.ts

import { Request, Response } from "express";
import { fetchExampleRequest } from "../../lib/api/internal-apis/example-api";

export default async function getToken (req: Request, res: Response) {
  try {
    const data = await fetchExampleRequest();

    return res.status(200).json({
      status: "success",
      data
    });

  } catch ( error ) {
  
    return res.status(401).json({
      status: "failed",
      data: {
        error: error
      }
    })
  }

};
```

## References for building this API Layer

[Video](https://www.youtube.com/watch?v=DMB7YUSckys)

[GitHub Repo](https://github.com/ThomasFindlay/react-api-workshop)
