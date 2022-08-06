
export const getImagen = async() => {

    try {

        const apiKey = 'SXH2PZDs4rl4lFrRHxMdGRrWNexoQct9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        //console.error(error)
        return "no se encontró la imagen";
    }
    
    
    
}

 getImagen();



