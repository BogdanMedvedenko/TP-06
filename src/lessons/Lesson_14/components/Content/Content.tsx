import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>Fullname:</ContentInfo>
      <ContentInfo>Age: </ContentInfo>
      <ContentInfo>Job: </ContentInfo>
    </ContentWrapper>
  );
}

export default Content;
