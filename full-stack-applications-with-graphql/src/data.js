const productsData = [
    {
        name: 'Educative',
        description: 'Interactive Courses for Software Developers',
        url: 'https://educative.io/',
        numberOfVotes: 10,
        publishedAt: '2021-04-05',
        authorId: '1', // reference to "ellen"
    },
    {
        name: 'Apollo',
        description: 'The Apollo Data Graph Platform',
        url: 'https://www.apollographql.com/',
        numberOfVotes: 5,
        publishedAt: '2021-01-08',
        authorId: '2', // reference to "peter"
    },
    {
        name: 'OneGraph',
        description: 'Build Integrations 100x Faster',
        url: 'https://www.onegraph.com',
        numberOfVotes: 5,
        publishedAt: '2020-08-22',
        authorId: '1', // reference to "ellen"
    },
]

const usersData = [
    {
      id: '1',
      userName: 'ellen',
      fullName: 'Ellen James'
    },
    {
      id: '2',
      userName: 'peter',
      fullName: 'Peter Miles'
    },
  ]

module.exports = {
    productsData: productsData,
    usersData: usersData,
}