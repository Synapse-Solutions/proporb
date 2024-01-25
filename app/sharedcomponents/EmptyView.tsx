import Image from "next/image";
import React from "react";
import SearchView from "./SearchView";
import EmptyViewComponent from "./EmptyViewComponent";

export default function EmptyView() {
  return (
    <div>
      <SearchView />
      <EmptyViewComponent
        title="No Property found"
        buttonTitle="New Property"
      />
    </div>
  );
}
