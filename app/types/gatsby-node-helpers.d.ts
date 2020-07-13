declare module 'gatsby-node-helpers' {
  export default function createNodeHelpers(options?: {
    sourceId?: string | undefined;
    typePrefix: string;
    conflictFieldPrefix?: string | undefined;
  }): {
    createNodeFactory: (
      type: string,
      middleware?: ((node: Object) => Object | Promise<Object>) | undefined
    ) => (obj: any, overrides?: Object | undefined) => Object | Promise<Object>;
    generateNodeId: (type: string, id: string) => string;
    generateTypeName: (type: string) => string;
  };
}
