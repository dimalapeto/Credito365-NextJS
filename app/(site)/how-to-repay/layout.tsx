import { SecondaryPagesTemplate } from '@/components';

export default function HowToRepayLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SecondaryPagesTemplate title="¿Cómo pagar?">
      {children}
    </SecondaryPagesTemplate>
  );
}
