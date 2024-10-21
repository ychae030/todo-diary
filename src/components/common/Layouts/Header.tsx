export type HeaderProps = {
  header: React.ReactNode;
};
export default function Header({ header }: HeaderProps) {
  return (
    <header className="flex justify-between py-2 text-brand dark:text-brandDark">
      {header}
    </header>
  );
}
