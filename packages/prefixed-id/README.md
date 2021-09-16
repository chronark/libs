# prefixed-id

Easy way to generate prefixed unique ids similar to what stripe does.
Based on uuid v4.

This is just a typesafe convenient wrapper for generating prefixed ids.

# Usage

```typescript
import { IdGenerator } from '@chronark/prefixed-id';

const idGenerator = new IdGenerator({
  humanReadableName: 'prefix',
  // Example:
  user: 'u',
});

idGenerator.id('user');
// -> u_xxxxxxxxxxxxxxxxxx...
```
