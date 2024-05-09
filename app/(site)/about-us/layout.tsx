import { SecondaryPagesTemplate } from '@/components';

export default function AboutUsLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SecondaryPagesTemplate title="Sobre Nosotros">
      {children}
    </SecondaryPagesTemplate>
  );
}
