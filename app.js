const apiKey = 'POrBnVpDKRKrhLJIxy0Nr964Y3s5Yl5I'
const getTrendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=9`
const searchBaseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

// const getTrending = async () => {
//     let res = await axios.get(getTrendingUrl)
//     let trendingArr = res.data.data;
//     let grid = document.querySelector('#grid')

//     for (let i = 0; i < trendingArr.length; i++) {
//         let imageURL = trendingArr[i].images.fixed_height.url
//         let newGif = document.createElement('div')
//         newGif.setAttribute('class', 'col')
//         let gifImage = document.createElement('img')
//         gifImage.setAttribute('src', imageURL)
//         gifImage.setAttribute('class', 'image-fluid p-2')
//         newGif.append(gifImage)
//         grid.append(newGif)
//     }
// }
//getTrending()

const submitButton = document.querySelector('#submit-button')
const clearButton = document.querySelector('#clear-button')
const input = document.querySelector('#text-input')
const resultSection = document.querySelector('#results-section')

const getSearchResults = async (url) => {

    let grid = document.createElement('div')
    grid.setAttribute('class', 'row row-cols-3')
    grid.setAttribute('id', 'grid')

    let res = await axios.get(url)
    let searchArr = res.data.data

    for (let i = 0; i < searchArr.length; i++) {
        let grid = document.querySelector('#grid')
        let imageURL = searchArr[i].images.fixed_height.url
        let newGif = document.createElement('div')
        newGif.setAttribute('class', 'col')
        let gifImage = document.createElement('img')
        gifImage.setAttribute('src', imageURL)
        gifImage.setAttribute('class', 'image-fluid p-2')
        newGif.append(gifImage)
        console.log(newGif);
        grid.append(newGif)
    }
}

submitButton.addEventListener('click', () => {
    let searchVal = input.value
    let searchURL = searchBaseUrl + searchVal + '&limit=21'
    getSearchResults(searchURL)
})

const clearResults = () => {
    let grid = document.querySelector('#grid')
    for (let i = 0; i < grid.children.length; i++) {
        grid.remove(grid.children)
    }
}

clearButton.addEventListener('click', () => {
    clearResults()
})

