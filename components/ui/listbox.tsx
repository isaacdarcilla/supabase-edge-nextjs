type ListboxProps<T> = {
  items: T[];
  className?: string;
  children: (item: T) => React.ReactNode;
};

export const ListBox = <T,>({
  items,
  className,
  children,
}: ListboxProps<T>) => (
  <div className={className}>
    {items.length > 0 ? (
      items.map((item) => children(item))
    ) : (
      <div className="font-semibold text-center">No data here yet.</div>
    )}
  </div>
);
