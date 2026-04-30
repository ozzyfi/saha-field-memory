import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const PilotModalContext = createContext<Ctx | null>(null);

export const PilotModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <PilotModalContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
    </PilotModalContext.Provider>
  );
};

export const usePilotModal = () => {
  const ctx = useContext(PilotModalContext);
  if (!ctx) throw new Error("usePilotModal must be used within PilotModalProvider");
  return ctx;
};
