import { useEffect, useState } from "react";
import { Redirect } from "expo-router";

export default function Index() {
  const [inicializado, setInicializado] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInicializado(true);
    }, 100);
  }, []);

  if (!inicializado) {
    return <Redirect href="/splash" />;
  }

  return <Redirect href="/(auth)/login" />;
}
