type ListboxItemProps = {
  key: string;
  className?: string;
  children: React.ReactNode;
};

export const ListBoxItem: React.FC<ListboxItemProps> = ({
  key,
  className,
  children,
}) => (
  <div key={key} className={className}>
    {children}
  </div>
);
