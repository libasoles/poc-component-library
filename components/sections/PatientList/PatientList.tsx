"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { Patient } from "types/Patient";
import PatientCard from "../PatientCard";
import NoContent from "./NoContent";
import PatientListLoading from "./PatientListLoading";

type ListProps = {
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
      <NoContent message="We couldn't retrieve the list of patients. Either create one, or try loading the page again in a few seconds." />
    );

  if (patients.length === 0) return <NoContent message="No patients found" />;

  return (
    <ul className="w-full">
      {virtualizedList.getVirtualItems().map((virtualRow) => (
        <div
          key={virtualRow.key}
          ref={virtualizedList.measureElement}
          data-index={virtualRow.index}
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
        </div>
      ))}
    </ul>
  );
};

export default PatienList;
