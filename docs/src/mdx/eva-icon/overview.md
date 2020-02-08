# EvaIcon
To use EvaIcon component you need to install his package first from [install eva icons](/guides/install-eva-icons)
### Usage

```js
import { EvaIcon } from 'oah-ui';
```

**Status**

[Example](demo://Example.tsx)

**Animation**

[Animation](demo://Animation.tsx)

#### Props

```typescript
interface IconProps {
  name: keyof Icons;
  status?: Status;
  className?: string;
  options?: EvaIconOptions;
}

interface EvaIconOptions {
  width?: string;
  height?: string;
  fill?: string;
  class?: string;
  animation?: {
    type?: 'zoom' | 'pulse' | 'shake' | 'flip';
    hover?: boolean;
    infinite?: boolean;
  };
}
```