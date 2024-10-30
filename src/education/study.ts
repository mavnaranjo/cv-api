export default interface Study {
    id: number,
    study: string,
    institution: string,
    location: string,
    dates: {
        from: Date,
        to: Date | null
    },
    description: string
};