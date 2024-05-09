import { SecondaryPagesTemplate } from '@/components';

export default function FAQLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SecondaryPagesTemplate title="Preguntas frecuentes">
      {children}
    </SecondaryPagesTemplate>
  );
}
