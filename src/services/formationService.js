const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllFormations = async () => 
{
    try{
        const response = await fetch(
            BASE_URL + '/formations',{
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
export const addFormations = async (formation) =>
{
    try{
        const response = await fetch(
            BASE_URL + '/formations' , {
                method : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(formation)
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

export const getFormation = async (param,index) =>
{
    try {
        let URL = BASE_URL +'/formations/';
        switch (index) {
            case 1: URL += 'nom/'+param; break;
            case 2: URL += param; break;
            default: throw new Error("SVP choisir le bon choix!");
        }
        const response = await fetch(
            URL , {
                method : 'GET'
            }
        )
    
        const json = await response.json();
    
        return index===1 ?json[0] : json;
    }catch(e)
    {
        return {error :e}
    }
    

}

