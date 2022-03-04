const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllPromotions = async () => 
{
    try{
        const response = await fetch(
            BASE_URL + '/promotions',{
                method : 'GET'
            } 
        )
        const json = await response.json();
    
        return json
    }catch(e)
    {
        throw new Error(e);
    }
}
export const addPromotion = async (promotion) =>
{
    try{
        const response = await fetch(
            BASE_URL + '/promotions' , {
                method : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(promotion)
            }
        )
    
        const json = await response.json();
    
        return json;
    }
    catch(e)
    {
        throw new Error(e);
    }
    
}

export const getPromotion = async (param,index) =>
{
    try {
        let URL = BASE_URL +'/promotions/';
        switch (index) {
            case 1: URL += 'sigle/'+param; break;
            case 2: URL += 'lieuRentree/'+param; break;
            case 3: URL +=  param.codeFormation+'/'+param.anneeUniversitaire; break;
            default: throw new Error("SVP choisir le bon choix!");
        }
        const response = await fetch(
            URL , {
                method : 'GET'
            }
        )
    
        const json = await response.json();
    
        return Array.isArray(json) ?json[0] : json;
    }catch(e)
    {
        return {error :e, message : e.message}
    }
    

}
