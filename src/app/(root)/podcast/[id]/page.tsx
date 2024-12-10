import React from "react";

function Podcast({ params }: { params: { id: string } }) {
  return <div>Podcast Details for {params.id}</div>;
}

export default Podcast;
