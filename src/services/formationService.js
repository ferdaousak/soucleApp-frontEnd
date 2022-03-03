export const getAllFormations = async () => 
{
    try{
        const response = await fetch(
            process.env.REACT_APP_BASE_URL + '/formations',{
                method : 'GET',
            } 
        )
        const json = await response.json();
    
        return {json : json}
    }catch(e)
    {
        return {json : {}, error:e}
    }
}
