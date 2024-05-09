import { Main } from '@/components';

export default function UserLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <Main>{children}</Main>;
}
