export const GetGif= async(categoria) =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=SXH2PZDs4rl4lFrRHxMdGRrWNexoQct9&q=${categoria}&limit=5`
    const resp=await fetch(url);
    const {data}=await resp.json();
    const gifs =data.map( (img) =>({
        id: img.id,
        titulo:img.title,
        url:img.images.downsized_medium.url
    }))
    return gifs;
}