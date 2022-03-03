const BASE_URL = "http://localhost:8080";
//const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllEnseignants = async () => 
{
    const response = await fetch(
        BASE_URL + '/enseignants',{
            method : 'GET',
        } 
    )

    const json = await response.json();

    return {json : json}
}

export const addEnseignants = async (enseignant) =>
{
    const response = await fetch(
        BASE_URL + '/enseignants' , {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(enseignant)
        }
    )

    const json = await response.json();

    return {json : json}
}

export const getEnseignant = async (param,index) =>
{
    let URL = BASE_URL +'/enseignants/';
    switch (index) {
        case 1: URL += 'emailUbo/'+param; break;
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

    return {json : json}

}


