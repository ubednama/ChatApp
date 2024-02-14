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