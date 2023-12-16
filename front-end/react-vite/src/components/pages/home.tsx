import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getHomeData } from "@/lib/api/graphql/internal-apis/home";
import { Skeleton } from "../ui/skeleton";
import { Pie, PieChart } from "recharts";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: getHomeData
  });

  return (
    <div className="flex flex-col p-4 gap-4">
      <section className="flex flex-wrap gap-6 justify-center">
        <Card className="min-w-[250px]">
          <CardHeader>Orders</CardHeader>
          {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
          {data?.getOrders?.totalRows && <CardContent>{data.getOrders.totalRows}</CardContent>}
          {error && <CardContent>Well that's not good...</CardContent>}
        </Card>
        <Card className="min-w-[250px]">
          <CardHeader>Total Revenue</CardHeader>
          {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
          {data?.getTotalRevenue?.total_revenue && <CardContent>${data.getTotalRevenue.total_revenue}</CardContent>}
          {error && <CardContent>Well that's not good...</CardContent>}
        </Card>
        <Card className="min-w-[250px]">
          <CardHeader>Customers</CardHeader>
          {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
          {data?.getCustomers?.totalRows && <CardContent>{data.getCustomers.totalRows}</CardContent>}
          {error && <CardContent>Well that's not good...</CardContent>}
        </Card>
        <Card className="min-w-[250px]">
          <CardHeader>Products</CardHeader>
          {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
          {data?.getProducts?.totalRows && <CardContent>{data.getProducts.totalRows}</CardContent>}
          {error && <CardContent>Well that's not good...</CardContent>}
        </Card>
      </section>
      <section>
        <Card className="min-w-[100px]">
          <CardHeader>Customer Country Distribution</CardHeader>
          {isLoading && <Skeleton className="w-[200px] h-[200px] rounded-full" />}
          {data?.getCustomerCountryDistribution && (
            <CardContent>
              <PieChart width={1000} height={500}>
                <Pie
                  data={data.getCustomerCountryDistribution.map((distributionEntry) => {
                    return {
                      name: distributionEntry?.country,
                      value: distributionEntry?.customerCount
                    };
                  })}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                />
              </PieChart>
            </CardContent>
          )}
          {error && <CardContent>Well that's not good...</CardContent>}
        </Card>
      </section>
    </div>
  );
};

export default Home;
