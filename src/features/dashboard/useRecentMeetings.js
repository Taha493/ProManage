import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getMeetingsAfterDate } from "../../api/apiMeetings";

export function useRecentMeetings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: meetings } = useQuery({
    queryFn: () => getMeetingsAfterDate(queryDate),
    queryKey: ["meetings", `last-${numDays}`],
  });


  return { isLoading, meetings};
}