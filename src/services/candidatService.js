export const getAllCandidats = async () => 
{
    try{
        const response = await fetch(
            process.env.REACT_APP_BASE_URL + '/candidats',{
                method : 'GET'
            } 
        )
        const json = await response.json();
    
        return json
    }catch(e)
    {
        return {error:e}
    }
    
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