export type ContentProps = {
  children: React.ReactNode;
};
export default function Content({ children }: ContentProps) {
  return <main>{children}</main>;
}
