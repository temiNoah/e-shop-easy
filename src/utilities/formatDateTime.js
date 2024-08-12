import moment from 'moment'
export const formatDate = (str) => {
    return moment(str).format('YYYY-MM-DD') //('MMMM Do YYYY, h:mm:ss a')
}

export const formatDateTime = (str) => {
    return moment(str).format('YYYY-MM-DD, h:mm:ss a')
}

export const formatDateV2 = (str, format) => {


    const date = moment(str);
    const formattedDate = date.format(format);

    console.log("date :" + str + "   date formated:" + formattedDate)

    return formattedDate;
}


export const formatDateV3 = (date) => {
    date = new Date(date);
    const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    const month = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}