import { hostname } from 'os';
import Person from './person';

const me: Person = {
    id: 1,
    name: 'Miguel Ángel',
    surname: 'Valentín Naranjo',
    title: 'Developer & Team Leader',
    birthdate: new Date(1989, 8, 22, 17, 30),
    email: 'mavnaranjo@gmail.com',
    phone: '+34 677738112',
    address: {
        address: 'Calle Badajoz 603',
        city: 'Casarrubios del Monte',
        zipcode: 45950,
        country: 'Spain'
    },
    description:
`As an experienced and versatile developer and team leader with over a decade of expertise, I have led impactful technological initiatives and managed high-performing teams across various industries.
Equipped with a diverse skill set encompassing team leadership, back-end, front-end and multiplatform development, software architecture and database design, I am prepared to drive impactful technological initiatives and lead high-performing teams to success.`,
    hobbies:
`I'm a musician who plays bouzouki and percussion, and an amateur sound engineer.
I also love crafting, electronics and nature.`,
    links: {
        LinkedIn: 'https://www.linkedin.com/in/miguel-%25C3%25A1ngel-valent%25C3%25ADn-naranjo-94a14366/'
    },
    image: 'http://localhost:3000/public/profile.jpg'
};

export default me;