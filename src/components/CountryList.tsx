import {useRecoilState} from "recoil";
import {Category, countryAtom} from "../atom";
import Button from "./Button";

interface ICountryList {
    tag: Category;
}

function CountryList({tag}:ICountryList) {
    const [countrys] = useRecoilState(countryAtom);

    return (
        <>
            <div>
                {countrys.filter((country) => country.category === tag).map((country) => (
                    <div key={country.name}>
                        <span>{country.name}</span>
                        <Button name={country.name} tag={tag}/>
                    </div>
                    )
                )}
            </div>
        </>
    );
}

export default CountryList;