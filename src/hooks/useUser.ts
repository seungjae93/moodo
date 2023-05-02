import { useState, useEffect } from "react";
export default function useUser() {
  const [user, setUser] = useState();
  useEffect(() => {}, []);
  return user;
}
