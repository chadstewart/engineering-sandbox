import { PaginationNav } from "@/components/molecules/pagination-nav/pagination-nav";

const storyConfig = {
  title: "Design System/molecules/Paginated Nav"
};

export default storyConfig;

export const PaginatedNavStory = () => <PaginationNav currentPage={1} totalPages={4} navUrl="/" />;
