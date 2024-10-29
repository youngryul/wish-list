import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import {Category, Country, countryAtom} from "../atom";
import {useState} from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Error = styled.span`
    color: orangered;
`;


interface IData {
    name: string;
    errors: {
        name: {message: string}
    }
}


function CountryForm() {
    const { register,formState:{errors}, handleSubmit, setError, setValue } = useForm<IData>();
    const setCountryAtom = useSetRecoilState(countryAtom);


    const onValid = (data:IData) => {
        if( data.name === "" ){
            setError("name", {message: "😂 required!!"})
        }
        else{
            const newCountry:Country = {
                name: data.name,
                category: Category.WANT,
            }

            setCountryAtom((prev) => [...prev, newCountry])
            setValue("name", "")
        }
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("name")}
                       placeholder="이름" />
                <button>가자!</button>
                <Error>{errors?.name?.message}</Error>
            </Form>
        </Container>
    );
}

export default CountryForm;