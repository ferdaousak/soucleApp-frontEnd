const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCandidats = async () => 
{
    try{
        const response = await fetch(
            BASE_URL + '/candidats',{
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
export const addCandidat = async (candidat) =>
{
    try{
        const response = await fetch(
            BASE_URL + '/candidats' , {
                method : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(candidat)
            }
        )
    
        const json = await response.json();
    
        return Array.isArray(json) ?json[0] : json;
    }
    catch(e)
    {
        throw new Error(e);
    }
    
}

export const getCandidat = async (param,index) =>
{
    try {
        let URL = BASE_URL +'/candidats/';
        switch (index) {
            case 1: URL += 'universite/'+param; break;
            case 2: URL += 'nom/'+param; break;
            case 3: URL += param; break;
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
        return {error :e, message: e.message}
    }
    

}
