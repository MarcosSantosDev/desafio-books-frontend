import { createContext, useContext, useState } from 'react';
import { WithChildren } from 'interfaces/children';

type ContextProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const defaultValues = {
  showModal: false,
  setShowModal: () => undefined,
};

export const ModalContext = createContext<ContextProps>(defaultValues);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: WithChildren) => {
  const [showModal, setShowModal] = useState(defaultValues.showModal);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
