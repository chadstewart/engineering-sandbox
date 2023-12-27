import { useNavigate } from "@tanstack/react-router";
import { Card, CardContent } from "../../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { PaginationNav } from "@/components/molecules/pagination-nav/pagination-nav";

interface GraphQlDataTableProps {
  responseObject: object[];
  currentPage: number;
  totalPages: number;
}

export const GraphQlDataTable = ({ responseObject, currentPage, totalPages }: GraphQlDataTableProps) => {
  const navigate = useNavigate();

  const handleClick = (pageToNavigateTo: string) => {
    navigate({ to: "/orders/details/$page", params: { page: pageToNavigateTo } });
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      <Card>
        <CardContent>
          <Table>
            <TableCaption>Testing a component.</TableCaption>
            <TableHeader>
              <TableRow>
                {Object.keys(responseObject[0] as object).map((key) => (
                  <TableHead className="capitalize">{key.toLowerCase()}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {responseObject.map((orderEntry) => (
                <TableRow>
                  {Object.values(orderEntry as object).map((value) => (
                    <TableCell>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow className="flex justify-end items-center w-full gap-2 px-3 py-4">
                <PaginationNav currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
