import { useQuery } from "@tanstack/react-query";
import { getWeeklyTasks } from "../../api/apiTasks";

export function useWeeklyActivity() {
  const { isLoading, data: tasks } = useQuery({
    queryFn: getWeeklyTasks,
    queryKey: ["weekly-activity"],
  });

  return { tasks, isLoading };
}