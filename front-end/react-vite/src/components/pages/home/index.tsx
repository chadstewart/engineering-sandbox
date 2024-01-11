import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/lib/api/graphql/internal-apis/home";
import { updateTitle } from "@/lib/util/update-title";
import HomeContent from "./home-content";

const Home = () => {
  updateTitle("Home");

  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: getHomeData
  });

  return <HomeContent content={data} isLoading={isLoading} error={error} />;
};

export default Home;
