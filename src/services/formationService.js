export const getAllFormations = async () => 
{
    const response = await fetch(
        process.env.REACT_APP_BASE_URL + '/formations',{
            methode : 'GET',
        } 
    )

    const json = await response.json();

    return {json : json}
}
