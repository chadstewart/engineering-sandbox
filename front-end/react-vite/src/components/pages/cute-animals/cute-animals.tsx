import { Card, CardContent, CardHeader } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";
import { Button } from "../../atoms/button/button";
import { Switch } from "../../ui/switch";
import { GetCatsQuery } from "@/gql/graphql";

const MAX_REFRESH = 5;

interface CuteAnimalsContentProps {
  content: GetCatsQuery | undefined;
  queryError: Error | null;
  queryRefetchError: boolean;
  queryLoading: boolean;
  queryReFetching: boolean;
  mutationPending: boolean;
  mutationError: Error | null;
  refreshes: number;
  handleClickButton: () => void;
  getDog: boolean;
  setGetDog: React.Dispatch<React.SetStateAction<boolean>>;
}

const CuteAnimalsContent = ({
  content: cats,
  queryError,
  queryRefetchError,
  queryLoading,
  queryReFetching,
  mutationPending,
  mutationError,
  refreshes,
  handleClickButton,
  getDog,
  setGetDog
}: CuteAnimalsContentProps) => {
  const handleClickSwitch = () => {
    setGetDog((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center gap-4 flex-col p-4">
      {!(queryError || queryRefetchError) && (
        <div className="flex justify-end gap-2">
          Cats
          <Switch checked={getDog} onClick={handleClickSwitch} />
          Dogs
        </div>
      )}
      <div className="flex flex-wrap gap-6 justify-center">
        {cats?.getCats &&
          cats.getCats.map((cat, index) => (
            <Card key={index} className="max-w-[250px]">
              <CardHeader>This is a test.</CardHeader>
              <CardContent>
                <img src={cat?.url ? cat.url : undefined} alt={`Cutie #${index + 1}`} />
              </CardContent>
            </Card>
          ))}
        {(queryLoading || queryReFetching || mutationPending) && (
          <>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
          </>
        )}
        {(queryError || queryRefetchError) && <div>Well that's not good...</div>}
      </div>
      {cats?.getCats && (
        <Button onClick={handleClickButton} disabled={mutationError || refreshes >= MAX_REFRESH ? true : false}>
          {mutationPending && <Skeleton className="w-[50px] h-[20px] rounded-full" />}
          {mutationError && "Well that's not good"}
          {!mutationError && !mutationPending && refreshes < MAX_REFRESH && "Get more cuties!"}
          {!mutationPending && refreshes >= MAX_REFRESH && "That's enough cuties!"}
        </Button>
      )}
    </div>
  );
};

export default CuteAnimalsContent;
