"use client";
import NotesComponent from "@/app/components/notes/NotesComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [notesArray, setNotesArray] = useState([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  useEffect(() => {
    getAllNotes();
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);

  const getAllNotes = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ getAllNotes ~ token:", token);
    try {
      const response = await getApiWithToken("/v1/notes", token);
      console.log("🚀 ~ getAllNotes ~ response:", response);
      setNotesArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ getAllNotes ~ error:", error);
    }
  };
  if (isLoadingScreen) {
    return <LoaderScreen />;
  }
  return <NotesComponent notesArray={notesArray} />;
}
