
// creating a user
db.createUser({
    user: 'logan',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})

// Creating a collection
db.books.insert({
    "name": "OOP Programing",
    "publishedDate": new Date(),
    "authors": [
        { "name": "jon snow Jr"},
    ]
})


// inserting many documents

db.books.insertMany([
{
    "name": "Confident Ruby",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Avadi Grimm"}
    ]
},
{
    "name": "The War of Art",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Steven Pressfield"}
    ]
},
{
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcom Gladwell"}
    ]
},
])


// Query with Projections

db.books.find(
    {
        name: "Confident Ruby"
    },
    {
        name: 1,
        publishedDate: 1,
        authors: 1,
    }
).pretty()

// Including nested Fields in a Find Query

db.books.find(
{
    name: "Blink"

},
{
    name: 1,
    publsihedDate: 1,
    "authors.name": 1

}
).pretty()