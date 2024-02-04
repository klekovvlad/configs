declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.gif' {
  const gif: string;
  export default gif;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
