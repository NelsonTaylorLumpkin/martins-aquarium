/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Pounder the Flounder/ ",
            food: "Diet Sprite 2 liter because it's cheaper/ ",
            length: 19,
            species: "Deep One/ ",
            location: "/ Las Vegas/ ",
            image:'./fish img/scaryfish.jpeg'
        },
        {
            id: 2,
            name: "Hippo/ ",
            food: "beans/ ",
            length: 2000,
            species: "Blowfish/ ",
            location: "/ Balloon Emporium/ ",
            image:'./fish img/cheekyfish.jpeg'
        },
        {
            id: 3,
            name: "Professor Puke Fish/ ",
            food: "slime/ ",
            length: 345,
            species: "Fatfish/ ",
            location: "/ Buffet/ ",
            image:'./fish img/puffer.jpeg'
        },
        {
            id: 4,
            name: "Subway Tuna/ ",
            food: "Apex predators/ ",
            length: 777,
            species: "Roundboy/ ",
            location: "/ Subway/ ",
            image:'./fish img/moonfish.jpeg'
        },
        {
            id: 5,
            name: "ANCHOVY/ ",
            food: "pizza/",
            length: 1,
            species: "Leoa Pesca/ ",
            location: "/ Under the ocean, dark and deep/ ",
            image:'./fish img/lionfish.jpeg'
        },
        {
            id: 6,
            name: "Piscean Beast/ ",
            food: "juji fruit/ ",
            length: 76876876,
            species: "Horse Apple Fish/ ",
            location: "/ Dentist Office/ ",
            image:'./fish img/fishteeth.jpeg'
        },
        {
            id: 7,
            name: "Ancient One/ ",
            food: "gravehhh/ ",
            length: 2,
            species: "Alpha Fish/ ",
            location: "/ Alone in a small bowl/ ",
            image:'./fish img/betafish.jpeg'
        },
        {
            id: 8,
            name: "The Octopus from The Boys/ ",
            food: "British Petroleum's empty apologies/ ",
            length: 1000000000,
            species: "Livelaughlove Fish/ ",
            location: "/ Under the Spice rack/ ",
            image:'./fish img/angler.jpeg'
        },

    ]
}
 export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
 }