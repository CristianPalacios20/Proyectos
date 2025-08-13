import { AuthProvider } from "./AuthContext";
import { ChatProvider } from "./Context";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ChatProvider>{children}</ChatProvider>
    </AuthProvider>
  );
}
