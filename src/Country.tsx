import styled from "styled-components";
import {useForm} from "react-hook-form";

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


interface IData {
    name: string;
}

function Country() {
    const { register, handleSubmit } = useForm<IData>();

    const onValid = (data:IData) => {
        console.log("data",data)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onValid)}>
                <h1>내가 가고싶은 나라들</h1>
                <input {...register("name")}
                       placeholder="이름" />
                <button>가자!</button>
                <span></span>
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