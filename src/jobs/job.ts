// @TODO: technologies? 
export default interface Job {
    id: number,
    position: string,
    company: string,
    location: string,
    dates: {
        from: Date,
        to: Date | null
    },
    description: string
};