import { AuthProvider } from "./AuthContext";
import { ChatProvider } from "./chatContext";
import { ResetPasswordProvider } from "./resetPasswordProvider";
import { ModalProvider } from "./modalContext";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ChatProvider>
        <ResetPasswordProvider>
          <ModalProvider>{children}</ModalProvider>
        </ResetPasswordProvider>
      </ChatProvider>
    </AuthProvider>
  );
}
