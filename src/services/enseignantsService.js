
export const getAllEnseignants = async () => 
{
    const response = await fetch(
        process.env.REACT_APP_BASE_URL + '/enseignants',{
            methode : 'GET',
        } 
    )

    const json = await response.json();

    return {json : json}
}





