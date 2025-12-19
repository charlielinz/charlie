export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const FoodPartsFragmentDoc = gql`
    fragment FoodParts on Food {
  __typename
  title
  slug
  date
  cover_image
  rate
  price {
    __typename
    average
    tier
  }
  categories
  menu
  body
}
    `;
export const TravelPartsFragmentDoc = gql`
    fragment TravelParts on Travel {
  __typename
  title
  slug
  travel_date
  cover_image
  body
}
    `;
export const FoodDocument = gql`
    query food($relativePath: String!) {
  food(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FoodParts
  }
}
    ${FoodPartsFragmentDoc}`;
export const FoodConnectionDocument = gql`
    query foodConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FoodFilter) {
  foodConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FoodParts
      }
    }
  }
}
    ${FoodPartsFragmentDoc}`;
export const TravelDocument = gql`
    query travel($relativePath: String!) {
  travel(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TravelParts
  }
}
    ${TravelPartsFragmentDoc}`;
export const TravelConnectionDocument = gql`
    query travelConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TravelFilter) {
  travelConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TravelParts
      }
    }
  }
}
    ${TravelPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    food(variables, options) {
      return requester(FoodDocument, variables, options);
    },
    foodConnection(variables, options) {
      return requester(FoodConnectionDocument, variables, options);
    },
    travel(variables, options) {
      return requester(TravelDocument, variables, options);
    },
    travelConnection(variables, options) {
      return requester(TravelConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
