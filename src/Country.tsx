import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import {countryAtom} from "./atom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;
    
`;

const List = styled.div``;


interface IData {
    name: string;
    errors: {
        name: {message: string}
    }
}


function Country() {
    const { register,watch,formState:{errors}, handleSubmit, setError, setValue } = useForm<IData>();
    const [country, setCountryAtom] = useRecoilState(countryAtom);

    const onValid = (data:IData) => {
        if( data.name === "" ){
            setError("name", {message: "내용을 입력하세요"})
        }
        else{
            setCountryAtom(data.name)
            setValue("name", "")
        }
    }



    return (
        <Container>
            <Form onSubmit={handleSubmit(onValid)}>
                <h1>내가 가고싶은 나라들</h1>
                <input {...register("name")}
                       placeholder="이름" />
                <button>가자!</button>
                <List>
                    <span>{country}</span>
                    <button>✅</button>
                    <button>🗑</button>
                </List>

                <span>{errors?.name?.message}</span>
            </Form>
            <Form>
                <h1>내가 가본 나라들</h1>
                <span></span>
            </Form>
            <Form>
                <h1>내가 좋아하는 나라들</h1>
                <span></span>
            </Form>
        </Container>
    );
}

export default Country;