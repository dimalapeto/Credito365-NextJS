import { SecondaryPagesTemplate } from '@/components';

export default function HowToBorrowLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SecondaryPagesTemplate title="¿Cómo pedir prestado?">
      {children}
    </SecondaryPagesTemplate>
  );
}
