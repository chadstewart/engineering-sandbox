import { GraphQlDataTable } from "@/components/organisms/graphql-data-table/graphql-data-table";

const storyConfig = {
  title: "Design System/Organisms/GraphQL Data Table"
};

const testObjArr = [
  {
    test1: "test",
    test2: "test"
  },
  {
    test3: "test",
    test4: "test"
  }
];

export default storyConfig;

export const GraphQlDataTableStory = () => <GraphQlDataTable responseObject={testObjArr} tableCaption="Test" />;
