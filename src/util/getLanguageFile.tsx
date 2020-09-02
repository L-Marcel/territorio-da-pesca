import { LangProps, LangGroupProps } from '../components/Header/index';

import ptBrLang from '../config/language/pt-br';
import enLang from '../config/language/en';

export const langOptions: (LangProps | LangGroupProps)[] = [
    {   
        type: "Group",
        name: "Português",
        options: [
            {
                type: "Lang",
                name: "Brasil",
                endName: "Português - Brasil",
                param: "pt-br",
                json: ptBrLang
            }
        ]
    },
    {
        type: "Lang",
        name: "English",
        param: "en",
        json: enLang
    },
]

export default function getLanguageFile(language: string){
    for(let x = 0; x < langOptions.length; x++){
        if(langOptions[x].type === "Lang"){
            const item = langOptions[x] as LangProps;
            if(item.param === language){
                return(item);
            }
        }else{
            const item = langOptions[x] as LangGroupProps;
            for(let y = 0; y < item.options.length; y++){
                if(item.options[y].param === language){
                    return(item.options[y]);
                }
            }
        }
    }

    if(langOptions[0].type === "Lang"){
        return(langOptions[0]);
    }else{
        const item = langOptions[0];
        return(item.options[0]);
    }
};

