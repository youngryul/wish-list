import {atom} from "recoil";

export enum Category {
    'WANT' = 1,
    'HAVE_BEEN' =2,
    'LIKE'=3,
}

export interface Country {
    name: string;
    category: Category;
}

const localStorageEffect = (key:string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const countryAtom = atom<Country[]>({
    key: "name",
    default: [],
    effects: [localStorageEffect("name")]
});

