import { Card, CardContent } from "../../ui/card";

const NotFound = () => {
  return (
    <div className="flex flex-wrap h-[calc(100vh-73px)] gap-6 p-4">
      <Card className="flex items-center justify-center w-full">
        <CardContent>404 | Well this isn't good...</CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
