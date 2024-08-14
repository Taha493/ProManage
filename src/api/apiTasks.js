// eslint-disable-next-line no-unused-vars
import React from 'react';
import supabase from './supabase';
import { getCurrentUser } from './UserApi';
import { getToday } from '../utlils/helpers';

export async function getTasks() {
    try {
      const { id } = await getCurrentUser();
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('assignee_id', id);
  
      if (error) {
        console.error(error);
        throw new Error("Tasks could not be loaded");
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error("Tasks could not be loaded");
    }
  }
export async function MarkAsDone(id){
    const{data, error} = await supabase.from('tasks')
    .update({ status: 'done' })
    .eq('id', id)
    .select();

    if(error){
        console.error(error);
        throw new Error("Tasks could not be loaded");
    }
    return data;
}

export async function getTasksAfterDate(date) {
  const { id } = await getCurrentUser();
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq('assignee_id', id)
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Meetings could not get loaded");
  }

  return data;
}

export async function getTodayTasks() {
  const todayStart = getToday({ start: true });
  const todayEnd = getToday({ end: true });
  const { id } = await getCurrentUser();
  const { data, error } = await supabase
  .from("tasks")
  .select("*")
  .eq('assignee_id', id)
  .gte("deadline", todayStart)
  .lte("deadline", todayEnd)
  .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Tasks could not get loaded");
  }
  return data;
}

export async function getWeeklyTasks() {
  const todayStart = getToday({ start: true });
  
  // Calculate the end of the 7th day from today
  const nextWeekEnd = getToday({ end: true, days: 7 });
  
  const { id } = await getCurrentUser();
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq('assignee_id', id)
    .gte("deadline", todayStart)
    .lte("deadline", nextWeekEnd)
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Tasks could not get loaded");
  }
  return data;
}


