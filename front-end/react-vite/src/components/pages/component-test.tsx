import { updateTitle } from "@/lib/util/update-title";
import { Card, CardContent } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";
import { Skeleton } from "../ui/skeleton";

export const ComponentTest = () => {
  updateTitle("Component Test");

  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: getOrderData
  });

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {isLoading && <Skeleton className="w-72 h-40" />}
      {error && <div>That's not good...</div>}
      {data?.getOrders && (
        <Card>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
