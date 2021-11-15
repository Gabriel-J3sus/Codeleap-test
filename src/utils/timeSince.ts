const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const timeSince = function(date: Date) {
  var seconds = Math.floor((Number(new Date()) - Number(date)) / 1000);

  if (seconds < 5) {
    return "just now";

  } else if (seconds < 60) {
    return seconds + "sec ago";
  
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds/60)

    if(minutes > 1) {
      return minutes + "min ago";
    } else {
      return "1min ago";
    }

  } else if (seconds < 86400) {
    const hours = Math.floor(seconds/3600)

    if(hours > 1)
      return hours + "h ago";
    else
      return "1h ago";
  }
  //more than 2 days
  else if (seconds < 172800) {
    const days = Math.floor(seconds/86400)

    if(days > 1)
      return days + "d ago";
    else
      return "1d ago";
      
  } else{
    //return new Date(time).toLocaleDateString();
    return date.getDate().toString() + " " + months[date.getMonth()] + ", " + date.getFullYear();
  }
}