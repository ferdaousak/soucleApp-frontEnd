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

// export const addCandidats = async() =>
// {
//     const response = await fetch(
//         process.env.REACT_APP_BASE_URL + '/candidats' , {
//             methode : 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body : 
//         }
//     )
// }