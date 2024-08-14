// eslint-disable-next-line no-unused-vars
import React from 'react';
import supabase from './supabase';
import { getCurrentUser } from './UserApi';

export async function getNotifications() {
    try {
      const { id } = await getCurrentUser();
      console.log(id);  
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('assignee_id', id);
  
      if (error) {
        console.error(error);
        throw new Error("Notifications could not be loaded");
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error("Notifications could not be loaded");
    }
  }
export async function MarkAsRead(id){
    const{data, error} = await supabase.from('notifications')
    .update({is_read: true })
    .eq('id', id)
    .select();

    if(error){
        console.error(error);
        throw new Error("Notifications could not be loaded");
    }
    return data;
}



