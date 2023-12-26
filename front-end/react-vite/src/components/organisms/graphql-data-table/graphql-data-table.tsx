import { Card, CardContent } from "../../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";

interface GraphQlDataTableProps {
  responseObject: object[];
}

export const GraphQlDataTable = ({ responseObject }: GraphQlDataTableProps) => {
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
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
