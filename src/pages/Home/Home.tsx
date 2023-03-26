import { Post } from "../../components/Post/Post";
import { HomeContainer } from "./HomeStyle";

export function Home(){
  return(
    <HomeContainer>
      <Post/>
      <Post/>
      <Post/>
    </HomeContainer>
  )
}