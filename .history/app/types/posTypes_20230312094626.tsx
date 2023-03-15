export type PostType = {
    title: string
    id: string
    createdAt: string
    user: {
        name: string
        image: string
        email: string
    }
    Comment?: {
        createdAt: string
        id: string
        postedId: string
        userId: string
    }[]
}