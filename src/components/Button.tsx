import {Category, countryAtom} from "../atom";
import {useRecoilState} from "recoil";

interface IButton {
    name: string;
    tag: Category;
}

function Button({name, tag}:IButton) {
    const [countrys, setCountry] = useRecoilState(countryAtom);
    const tagAddNum = (location:string) => {
        if( tag === Category.WANT ){
            return 2
        }
        else if ( tag === Category.HAVE_BEEN ) {
            if( location === "first"){
                return 3
            }
            else {
                return 1
            }

        }
        else {
            return 2
        }
    }
    const onAdd = (location:string) =>(event:React.MouseEvent<HTMLButtonElement>) => {
        const changeCountry = countrys.map((country) => {
            if(country.name === name) {
                return {...country, category: tagAddNum(location)};
            }
            else {
                return country;
            }
        });
        setCountry(changeCountry);
    }

    const onDelete = () => {
        const deleteCountry = () => {
            return countrys.filter(f => f.name !== name)
        }

        setCountry(deleteCountry);
    }

    return(
        <>
            {tag === Category.WANT &&
                <>
                    <button onClick={onAdd("first")}>✅</button>
                    <button onClick={onDelete}>🗑</button>
                </>
            }
            {tag === Category.HAVE_BEEN &&
                <>
                    <button onClick={onAdd("first")}>👍</button>
                    <button onClick={onAdd("second")}>❌</button>
                </>
            }
            {tag === Category.LIKE &&
                <>
                    <button onClick={onAdd("first")}>👎</button>
                </>
            }

        </>
    );
}

export default Button;