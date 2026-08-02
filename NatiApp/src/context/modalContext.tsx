import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ============================================
   TYPES
============================================ */

export type ModalType =
  | "AGREGAR_PERSONA"
  | "NUEVO_PRESTAMO"
  | "MODAL_CONFIRM_CODIGO"
  | null;

type ModalPayload = any;

type ModalContextType = {
  modalType: ModalType;
  modalData: ModalPayload;
  isVisible: boolean;
  openModal: (type: ModalType, data?: ModalPayload) => void;
  closeModal: () => void;
};

/* ============================================
   CONTEXT
============================================ */

const ModalContext = createContext<ModalContextType | null>(null);

/* ============================================
   PROVIDER
============================================ */

export function ModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<ModalPayload>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (type: ModalType, data?: ModalPayload) => {
    setModalType(type);
    setModalData(data ?? null);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setModalType(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{
        modalType,
        modalData,
        isVisible,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

/* ============================================
   HOOK
============================================ */

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModal debe usarse dentro de ModalProvider"
    );
  }

  return context;
}

