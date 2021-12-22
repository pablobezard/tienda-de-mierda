document.addEventListener('DOMContentLoaded',() => {
    fetchData()
} )

const API_URL = "https://fakestoreapi.com"

const fetchData = async () => {
    try{
        const res = await fetch(`${API_URL}/products/`)
        const data = await res.json() 
    } catch (error) {
        console.log(error)
    }
}

