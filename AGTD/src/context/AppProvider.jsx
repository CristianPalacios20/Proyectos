import { AuthProvider } from "./AuthContext";
import { ChatProvider } from "./chatContext";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ChatProvider>{children}</ChatProvider>
    </AuthProvider>
  );
}
