export const truncate = (text: string, end: number) => {
    return text.length > end ? text.substring(0, end) + "..." : text
}

export const isDevMode = process.env.NODE_ENV === "development"