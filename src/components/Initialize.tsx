import * as React from "react";
import { useEffect } from "react";
import { useUserStore } from "../store/user";

export const Initialize = () => {
  const { setUser, setUsers, userToUse } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/TheGipsyDanger/abd4bb4b-53a1-4347-afe6-095179535ac4/refs/heads/main/data.json"
        );
        const data = await response.json();

        const users = Object.keys(data);

        setUsers(users);

        if (userToUse !== "") {
          setUser(data[userToUse]);
        } else {
          setUser(data[users[0]]);
        }
      } catch (error) {
        console.error("Erro ao buscar JSON:", error);
      }
    };

    console.log({ userToUse });
    fetchData();
  }, [userToUse]);

  return null;
};
