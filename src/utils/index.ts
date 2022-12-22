const convertToTime = (date: any) => {
    const format = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
    date = new Date(date);
    return `${date.getHours().toString().length === 1
        ? format[date.getHours()]
        : date.getHours()
        }:${date.getMinutes().toString().length === 1
            ? format[date.getMinutes()]
            : date.getMinutes()
        }`;
};
const formatDate = (
    date: any
) => {
    const format = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    date = new Date(date);
    const shortMonthName = months[date.getMonth()];

    return date
        ? `${date.getDate().toString().length === 1
            ? format[date.getDate()]
            : date.getDate()
        } ${shortMonthName} ${date.getFullYear()}, ${convertToTime(date)}`
        : "";
};
export default formatDate;