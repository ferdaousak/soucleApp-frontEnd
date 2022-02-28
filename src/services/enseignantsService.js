
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

export const addEnseignants = async(enseignant) =>
{
    const response = await fetch(
        process.env.REACT_APP_BASE_URL + '/candidats' , {
            methode : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify({enseignant})
        }
    )

    const json = await response.json();

    return {json : json}
}



