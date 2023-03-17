import moment from "jalali-moment";

export const convertDate = (d) => {
    const days = [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهار شنبه",
        "پنج شنبه",
        "جمعه",
    ];

    const pd =
        days[
        moment(d, "YYYY-MM-DDTHH:mm:ss").locale("fa").weekday()
        ] +
        " " +
        moment(d, "YYYY-MM-DDTHH:mm:ss")
            .locale("fa")
            .add(1, "days")
            .format("D MMMM");

    return pd;
};



export const isCurrentHour = (d) => {
    const currentDate = new Date()
    const currentH = currentDate.getHours()

    const h = d.split(" ")[1].substring(0, 2)
    return Number(h) === Number(currentH)
}

export const getTime = () => {
    const date = new Date()
    const addDigit = (num) => {
        return num < 10 ? "0" + num : num
    }
    return `${addDigit(date.getHours())}:${addDigit(date.getMinutes())}:${addDigit(date.getSeconds())}`
}