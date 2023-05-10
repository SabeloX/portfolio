export const details =  {
    about: 'My interest in the field began as a hobby, but as I discovered my passion for it, I decided to pursue it professionally. I studied Electrical and Computer Engineering at the University of Cape Town, majoring in Computer Science and Embedded Systems. I am eager to make a contribution to the tech industry and be a part of something remarkable.',
    profile: '/profile.svg',
    name: 'Sabelo',
    surname: 'Mtetwa',
    slogan: 'A software developer that turns business problems into software solutions.',
    profession: 'Software Developer',
    contact: '+27 67 731 2806',
    email: 'sabelo.x.mtetwa@gmail.com'
}

export const projects = [
    {
      _id: '6452ec9cdbda447312f561fe',
      image: '/projects/ttt.png',
      title: 'Talk To Tobo',
      concepts: [
        'Dynamic blogs',
        'CRUD operations',
        'Authentication & authorization',
        'Responsive'
      ],
      source: 'https://github.com/SabeloX/portfolio',
      demo: 'https://ttt-opal.vercel.app/',
      tools: [ 'Next.js', 'Mantine - UI Framework' ],
      description: 'A personal website for a life coach who wanted to explore the digital world.'
    },
    {
      _id: '6452edecdbda447312f561ff',
      image: '/projects/dc.png',
      title: 'Digital Characters',
      concepts: [ 'Data input/output', 'CRUD operations', 'Responsive' ],
      source: 'https://github.com/SabeloX/create-and-display-digital-characters',
      demo: 'https://create-and-display-digital-characters.vercel.app/',
      tools: [ 'Next.js', 'MongoDB', 'Mongoose' ],
      description: 'This is a platform that allows users to create and display digital characters.'
    }
]

export const skills = [
    {
        _id: '6452eb62dbda447312f561fb',
        title: 'Frontend',
        data: [
            'HTML/CSS',
            'JavaScript',
            'Bootstrap',
            'React.js',
            'Material UI',
            'Mantine',
            'Responsiveness'
        ]
    },
    {
        _id: '6452ebd0dbda447312f561fc',
        title: 'Backend',
        data: [
            'Node.js',
            'Python',
            'MongoDB/Mongoose',
            'Express.js',
            'SQL',
            'REST API',
            'AWS DynamoDB'
        ]
    },
    {
        _id: '6452ec31dbda447312f561fd',
        title: 'Other',
        data: [
            'Git/Github',
            'AWS Services',
            'Agile/SCRUM',
            'Typescript',
            'Linux/Unix'
        ]
    }
]