export const getAllCandidats = async () => 
{
    const response = await fetch(
        process.env.REACT_APP_BASE_URL + '/candidats',{
            methode : 'GET',
        } 
    )

    const json = await response.json();

    return {json : json}
}
