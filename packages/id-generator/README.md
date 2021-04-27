# ID Generator

**The library for ID generation.**

## Installation

```sh
npm i --save @rbkmoney/id-generator
```

Full details in the [monorepo root README.md](https://github.com/rbkmoney/fe-core#installation)

## Usage

-   Inject service to your service

```typescript
import { IdGeneratorService } from '@rbkmoney/id-generator';

constructor(private idGenerator: IdGeneratorService) {}
```

-   Call the methods you want

```typescript
const uuid = this.idGenerator.generateUUID();

const shortUuid = this.idGenerator.generateShortUUID();
```

## Contributing

Full details in the [monorepo root README.md](https://github.com/rbkmoney/fe-core#contributing)
