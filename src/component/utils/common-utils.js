export const addElipsis=(text)=>{

    if(text=="" || text==null){return text}

    else if(text.length>50)

    {return text.substring(0,30)+"..."}

    else{

        return text;

    }

}

export const addElipsistitle=(text)=>{

    if(text==""){return text}

    else if(text.length>30)

    {return text.substring(0,20)+"..."}

    else {

        return text;

    }

}

 