import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getTasksAfterDate } from "../../api/apiTasks";

export function useRecentTasks() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: tasks } = useQuery({
    queryFn: () => getTasksAfterDate(queryDate),
    queryKey: ["tasks", `last-${numDays}`],
  });

  return { isLoading, tasks };
}