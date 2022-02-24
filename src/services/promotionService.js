export const getAllPromotions = async () => 
{
    const response = await fetch(
        process.env.REACT_APP_BASE_URL + '/promotions',{
            methode : 'GET',
        } 
    )

    const json = await response.json();

    return {json : json}
}
