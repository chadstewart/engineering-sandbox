import { Card, CardContent, CardHeader } from "../ui/card";

const Home = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      <Card className="min-w-[250px]">
        <CardHeader>This is a test.</CardHeader>
        <CardContent>This is still a test!</CardContent>
      </Card>
      <Card className="min-w-[250px]">
        <CardHeader>This is a test.</CardHeader>
        <CardContent>This is still a test!</CardContent>
      </Card>
      <Card className="min-w-[250px]">
        <CardHeader>This is a test.</CardHeader>
        <CardContent>This is still a test!</CardContent>
      </Card>
      <Card className="min-w-[250px]">
        <CardHeader>This is a test.</CardHeader>
        <CardContent>This is still a test!</CardContent>
      </Card>
      <Card className="min-w-[250px]">
        <CardHeader>This is a test.</CardHeader>
        <CardContent>This is still a test!</CardContent>
      </Card>
    </div>
  );
};

export default Home;
