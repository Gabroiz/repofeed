import { PostContainer, PostContent, PostFooter, PostHeader, PostTitle, Tag, TagContainer, TagWrapper } from "./PostStyle";

export function Post(){
  return(
    <PostContainer>
      <PostHeader>
        <PostTitle>
          <strong>Atualização bibibi bobobo</strong>
          <span>BFF-Tickets</span>
        </PostTitle>
        <span>em 01/02/2023</span>
      </PostHeader>

      <PostContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse sequi aliquam facilis explicabo quia optio suscipit quibusdam perferendis minus corrupti magnam, quasi soluta numquam blanditiis! Ea omnis nesciunt dolorem!</p>
        <a href="#">Site muito loco</a>
      </PostContent>

      <PostFooter>
        <TagContainer>
          <TagWrapper>
            <strong>Tipo:</strong>
            <Tag variant="feature">Melhoria</Tag>
            <Tag variant="bug">Bug</Tag>
            <Tag variant="tech">Técnico</Tag>
            <Tag>Adapt</Tag>
          </TagWrapper>

          <TagWrapper>
            <strong>Ambiente:</strong>
            <Tag>SIT</Tag>
            <Tag>PROD</Tag>
          </TagWrapper>
        </TagContainer>

        <button>Acessar</button>
      </PostFooter>
    </PostContainer>
  )
}