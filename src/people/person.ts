import Address from './address';

export default interface Person {
    id: number,
    name: string,
    surname: string,
    birthdate: Date,
    title: string,
    email: string,
    phone: string
    address: Address,
    description: string,
    hobbies: string,
    links: {
        [site: string]: string
    },
    image: string
}