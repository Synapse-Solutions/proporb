"use client";
import NotesComponent from "@/app/components/notes/NotesComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [notesArray, setNotesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    setIsLoading(true);
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ getAllNotes ~ token:", token);
    try {
      const response = await getApiWithToken("/v1/notes", token);
      console.log("🚀 ~ getAllNotes ~ response:", response);
      setIsLoading(false);
      setNotesArray(response.data.result);
    } catch (error) {
      setIsLoading(false);
      console.log("🚀 ~ getAllNotes ~ error:", error);
    }
  };

  return <NotesComponent notesArray={notesArray} isLoading={isLoading} />;
}
