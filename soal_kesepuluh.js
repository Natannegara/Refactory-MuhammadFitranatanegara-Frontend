
const fetch = require('node-fetch')

const posts = fetch('https://jsonplaceholder.typicode.com/posts')
const users = fetch('https://jsonplaceholder.typicode.com/users')

// calling two request at the same time using fetch library
const result = Promise.all(
    [posts, users]
).then(async ([postsData, usersData]) => {
    // each response of request stored in new variable
    const postsRes = await postsData.json()
    const usersRes = await usersData.json()

    // combining two response into one object base on the userId
    const array = []
    postsRes.map(post => {
        usersRes.map(user => {
            if (post.userId == user.id) {
                array.push(JSON.stringify({ ...post, ...{ user: user } }))
            }
        })
    })
    return array
})

result.then(res => {
    console.log(res);
})
