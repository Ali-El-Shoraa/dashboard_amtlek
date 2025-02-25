import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./OrgChart.css";

export default function SelectionDemo() {
  const [selection, setSelection] = useState([]);
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Amy Elsner",
        title: "CEO",
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            title: "CMO",
          },
          children: [{ label: "Sales" }, { label: "Marketing" }],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
          children: [{ label: "Development" }, { label: "UI/UX Design" }],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div
          className="flex flex-col items-center justify-center  relative"
          style={{ borderRadius: "1rem" }}
          data-pc-section="node"
        >
          <img
            alt={node.data.name}
            src={node.data.image}
            className="mb-3 w-12 "
          />
          <span className="font-bold ">{node.data.name}</span>
          <span className="text-sm">{node.data.title}</span>
        </div>
      );
    }
    return node.label;
  };

  return (
    <div className="card overflow-x-auto pt-10">
      <OrganizationChart
        value={data}
        selectionMode="multiple"
        selection={selection}
        onSelectionChange={(e) => setSelection(e.data)}
        nodeTemplate={nodeTemplate}
      />
    </div>
  );
}
