// eslint-disable-next-line no-unused-vars
import React from 'react';

export const getToday = function (options = {}) {
  let today = new Date();

  // Apply the days offset if provided
  if (options?.days) {
    today.setDate(today.getDate() + options.days);
  }

  // Set the time to the end of the day if the 'end' option is specified
  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  console.log(today.toISOString());
  return today.toISOString();
};
