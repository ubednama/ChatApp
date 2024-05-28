    // 24 hour format
// export function extractTime(dateString) {
//     const date = new Date(dateString);
//     const hours = padZero(date.getHours());
//     const minutes = padZero(date.getMinutes());
//     return `${hours}:${minutes}`;
// }


    // 12 hour format
export function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;     // Handle midnight (0 hours)
    const paddedHours = padZero(hours);
    const minutes = padZero(date.getMinutes());
    return `${paddedHours}:${minutes} ${ampm}`;
}



//Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}

//2024-02-12T22:18:17.114Z

export const formatTime = (dateString) => {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - publishedDate.getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (minutesDifference < 60) {
        return `${minutesDifference} min ago`;
    } else if (hoursDifference < 24) {
        const formattedTime = publishedDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
        return formattedTime;
    } else if (hoursDifference < 48) {
        return 'Yesterday';
    } else if (daysDifference < 7) {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekdays[publishedDate.getDay()];
    } else if (daysDifference < 365) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${publishedDate.getDate()} ${months[publishedDate.getMonth()]}`;
    } else {
        const month = publishedDate.getMonth() + 1;
        const year = publishedDate.getFullYear();
        return `${month}/${publishedDate.getDate()}/${year}`;
    }
};