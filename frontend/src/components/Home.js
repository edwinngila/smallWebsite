import { Container, Image, Row } from "react-bootstrap";
import Hacker from '../IMG/Hacker.png'

const HomePage=()=>{
    return(
        <Container fluid style={{height:"100vh"}} className="bg-dark">
             <Row className="alighn-items-center justify-content-center">
                <Image style={{width:"300px",height:"300px"}} src={Hacker} alt="img"></Image>
                <h4 style={{color:"white",textAlign:"center"}}>You have been hacked!!</h4>
             </Row>
        </Container>
    );
}
export default HomePage;