import { AuthProvider } from "./AuthContext";
import { ChatProvider } from "./chatContext";
import { ResetPasswordProvider } from "./resetPasswordProvider";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ChatProvider>
        <ResetPasswordProvider>{children}</ResetPasswordProvider>
      </ChatProvider>
    </AuthProvider>
  );
}
