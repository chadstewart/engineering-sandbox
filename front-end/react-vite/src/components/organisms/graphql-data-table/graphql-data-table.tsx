import { Card, CardContent } from "../../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { PaginationNav } from "@/components/molecules/pagination-nav/pagination-nav";
import { NavUrl } from "@/components/molecules/pagination-nav/pagination-nav-types";

interface GraphQlDataTableProps {
  tableCaption: string;
  responseObject: object[];
  currentPage?: number;
  totalPages?: number;
  navUrl?: NavUrl;
}

export const GraphQlDataTable = ({
  tableCaption,
  responseObject,
  currentPage,
  totalPages,
  navUrl
}: GraphQlDataTableProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4 overflow-auto">
      <Card>
        <CardContent>
          <Table>
            <TableCaption>{tableCaption}</TableCaption>
            <TableHeader>
              <TableRow>
                {Object.keys(responseObject[0] as object).map((key, index) => (
                  <TableHead key={index} className="capitalize">
                    {key.toLowerCase()}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {responseObject.map((entry, index) => (
                <TableRow key={index}>
                  {Object.values(entry as object).map((value, valueIndex) => (
                    <TableCell key={valueIndex}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
              {currentPage && totalPages && navUrl && (
                <TableRow className="flex justify-end items-center w-full gap-2 px-3 py-4">
                  <PaginationNav currentPage={currentPage} totalPages={totalPages} navUrl={navUrl} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
