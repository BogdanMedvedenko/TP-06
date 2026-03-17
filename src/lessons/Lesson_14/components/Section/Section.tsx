import Content from "../Content/Content";

import { SectionTitle, SectionWrapper } from "./styles";

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;
