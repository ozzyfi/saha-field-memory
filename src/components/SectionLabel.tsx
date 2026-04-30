interface Props {
  children: React.ReactNode;
}

export const SectionLabel = ({ children }: Props) => (
  <div className="eyebrow mb-3">{children}</div>
);
