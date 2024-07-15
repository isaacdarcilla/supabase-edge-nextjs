import { Suspense } from "react";

import Loading from "./loading";

import { title } from "@/components/primitives";
import { ListBox } from "@/components/ui/listbox";
import { ListBoxItem } from "@/components/ui/listboxitem";

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
};

export default async function Home() {
  const response = await fetch(
    `${process.env.SUPABASE_EDGE_FUNCTIONS}/students`,
  );

  const students: Student[] = await response.json();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-sm text-center justify-center">
        <h1 className={title({ size: "sm" })}>
          Supabase Edge Functions with&nbsp;
        </h1>
        <h1 className={title({ size: "sm", color: "blue" })}>Next.js</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <ListBox className="space-y-4 mt-10" items={students}>
          {(item: Student) => (
            <ListBoxItem
              key={item.id}
              className="hover:scale-105 transform transition-all duration-200 cursor-pointer"
            >
              <div className="flex gap-2 items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-md font-semibold">{`${item.first_name} ${item.last_name}`}</span>
                  <span className="text-sm text-default-500">{item.email}</span>
                </div>
                <div>
                  <span className="text-xs">Age: {item.age}</span>
                </div>
              </div>
            </ListBoxItem>
          )}
        </ListBox>
      </Suspense>
    </section>
  );
}
