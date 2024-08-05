// eslint-disable-next-line no-unused-vars
import React from 'react';
import supabase from './supabase';

export async function getTasks(){
    const{data, error} = await supabase.from("tasks").select('*');

    if(error){
        console.error(error);
        throw new Error("Tasks could not be loaded");
    }
    return data;
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

