function formatDateandTime(timestamp) {
    const date = new Date(timestamp);
  
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  }

  export default formatDateandTime;
  