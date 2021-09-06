

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: any,
        large: any
    },
    followed: boolean
}
