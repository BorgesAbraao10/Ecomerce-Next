import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Borges</p>
      {children}
    </div>
  );
}
