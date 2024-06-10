"use client";

import Message from "@/components/generic/Message";
import PatientCard from "@/components/sections/PatientCard/PatientCard";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Patient } from "types/Patient";
import PatientListLoading from "./PatientListLoading";

export type ListProps = {
  isLoading: boolean;
  isError: boolean;
  patients?: Patient[];
  virtualizedList: ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>;
};

const PatienList = ({
  isLoading,
  isError,
  patients,
  virtualizedList,
}: ListProps) => {
  if (isLoading) return <PatientListLoading />;

  if (isError || !patients)
    return (
      <Message
        variant="error"
        content="We couldn't retrieve the list of patients. Either create one, or try loading the page again in a few seconds."
      />
    );

  if (patients.length === 0) return <Message content="No patients found" />;

  return (
    <ul className="w-full">
      {virtualizedList.getVirtualItems().map((virtualRow) => (
        <li
          key={virtualRow.key}
          ref={virtualizedList.measureElement}
          data-index={virtualRow.index}
          className="transition-all"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: `${virtualRow.size}px`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          <PatientCard patient={patients[virtualRow.index]} />
        </li>
      ))}
    </ul>
  );
};

export default PatienList;
