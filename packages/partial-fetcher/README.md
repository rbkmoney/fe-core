# Partial-fetcher

**The library for fetching data from endpoints that uses continuationToken**

API answers something like this?

```typecript
Response {
	result: any[];
	continuationToken?: string;
}
```

Use a `partial-fetcher`!

## Installation

```sh
npm i --save @rbkmoney/partial-fetcher
```

Full details in the [monorepo root README.md](https://github.com/rbkmoney/fe-core#installation)

## Usage

-   Extend your service class with `PartialFetcher` like this where `R` is result type and `P` search params type

```typescript
Service extends PartialFetcher<R, P>
```

-   Declare protected fetch method

```typescript
fetch(params: P, continuationToken: string): Observable<FetchResult<R>>
```

-   Search your items with `search` method, update items with `refresh`, load more with `fetchMore`.

-   Get your items from `searchResult$`, check if it has more with `hasMore$`, get loading state from `doAction$` and subscribe to errors with `errors$`.

-   **You're awesome!**

## Contributing

Full details in the [monorepo root README.md](https://github.com/rbkmoney/fe-core#contributing)
