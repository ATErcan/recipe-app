import styled from "styled-components";

export const ErrorContainer = styled.div`
  padding: 1rem;
`;
export const ErrorImage = styled.div`
  background-image: url("https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=1380&t=st=1668265905~exp=1668266505~hmac=f35ea08e7a1df839c601d1f7fab1a6d01a4eee0064ff297771a971149e3e3da1");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 250px;
  min-height: 150px;
  margin: auto;
  @media screen and (min-width: 576px) {
    width: 350px;
    min-height: 220px;
  }
  @media screen and (min-width: 992px) {
    width: 500px;
    min-height: 300px;
  }
`;
