import { useQuery } from "@tanstack/react-query";
import { getTodayTasks } from "../../api/apiTasks";

export function useTodayTasks() {
  const { isLoading, data: tasks } = useQuery({
    queryFn: getTodayTasks,
    queryKey: ["today-activity"],
  });

  return { tasks, isLoading };
}