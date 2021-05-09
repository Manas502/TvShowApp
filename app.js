
const form = document.querySelector('#searchForm');
const content = document.getElementById('content');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: { q: searchTerm }}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
  
})

const makeImages = (shows) => {
    
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            // document.body.append(img);
            content.append(img);
        }
    }
}

// const btn = document.getElementById('clear');
// btn.addEventListener('click', (e)=>{
//     content.innerHTML="";
// })

document.querySelector('input').addEventListener('click', (e)=>{
    content.innerHTML="";
})


