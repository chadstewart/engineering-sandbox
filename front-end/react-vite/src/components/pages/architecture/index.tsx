import { Card, CardContent, CardHeader } from "../../ui/card";
import { updateTitle } from "@/lib/util/update-title";
import architectureImage from "@/assets/engineering-sandbox-project-architecture-image.png";

const Architecture = () => {
  updateTitle("About");

  return (
    <div className="flex flex-wrap w-full p-4">
      <Card className="w-full p-4">
        <CardHeader>The Engineering Sandbox's System Architecture</CardHeader>
        <CardContent className="flex flex-col gap-2 pt-3">
          <img
            src={architectureImage}
            alt="The Engineering Sandbox Architecture
                 Image showing Front-End to API Gateway, which connects to Redis
                 for caching, Auth0 for auth, 3rd party services, a microservice and a database."
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Architecture;
