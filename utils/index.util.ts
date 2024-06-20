export const truncate = (text: string, end: number) => {
    return text.length > end ? text.substring(0, end) + "..." : text
}

export const formateDate = (date: Date) => {
    // Returns date in 'YYYY/MM' format

    let month = date.getMonth() + 1
    return `${date.getFullYear()}/${month >= 10 ? month : "0" + month}`
}

export const isDevMode = process.env.NODE_ENV === "development"