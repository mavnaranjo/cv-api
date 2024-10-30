import Study from "./study";

const studies: Study[] = [
    {
        id: 1,
        study: 'Computer Engineering',
        institution: 'Universidad Carlos III de Madrid',
        location: 'Leganés',
        dates: {
            from: new Date(2008, 10, 1),
            to: new Date(2013, 7, 30)
        },
        description:
`My specialty was Computer Architecture & Engineering, where I got strong knowledge in:
• Computer Architecture
• Operating systems design and architecture
• Networking
• Distributed computing
• Security
• Real-time systems`
    }
];

export default studies;