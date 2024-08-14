// eslint-disable-next-line no-unused-vars
import React from 'react';
import supabase from './supabase';
import { getCurrentUser } from './UserApi';
import { getToday } from '../utlils/helpers';

export async function getMeetings() {
    try {
      const { id } = await getCurrentUser();
      console.log(id);  
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('guest_id', id);
  
      if (error) {
        console.error(error);
        throw new Error("Meetings could not be loaded");
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error("Meetings could not be loaded");
    }
  }
  export async function MarkMeeting(id, status) {
    const { data, error } = await supabase
        .from('meetings')
        .update({ status })
        .eq('id', id)
        .select();

    if (error) {
        console.error("Error updating meeting:", error);
        throw new Error("Meeting could not be updated.");
    }

    return data;
}

export async function getMeetingsAfterDate(date) {
  const { data, error } = await supabase
    .from("meetings")
    .select("*")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Meetings could not get loaded");
  }

  return data;
}




