import Content, { ContentProps } from "./Content";
import Header, { HeaderProps } from "./Header";

type LayoutProps = {
  header: HeaderProps;
  content: ContentProps;
};
export default function Layout({ header, content }: LayoutProps) {
  return (
    <>
      <Header {...header} />
      <Content {...content} />
    </>
  );
}
