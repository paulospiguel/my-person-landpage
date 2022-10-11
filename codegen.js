module.exports = {
  schema: `${process.env.NEXT_PUBLIC_SCHEMA_URL}`,
  documents: "./src/graphql/**/*.graphql",
  generates: {
    ["./src/graphql/generated.ts"]: {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        interfacePrefix: "I",
        typesPrefix: "I",
        skipTypename: true,
        declarationKind: "interface",
      },
      hooks: {
        afterAllFileWrite: ["eslint --fix", " prettier --write"],
      },
      require: ["dotenv/config"],
    },
  },
};
