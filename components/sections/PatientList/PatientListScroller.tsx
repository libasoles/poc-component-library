"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useFetchPatients } from "api/useFetchPatients";
import { useRef } from "react";
import PatienList from "./PatientList";

const estimateCardHeight = 200;

const PatientListScroller = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, isError } = useFetchPatients();

  const patients = data?.sort((a, b) => b.createdAt.diff(a.createdAt));

  const virtualizedList = useVirtualizer({
    count: patients?.length || 0,
    getScrollElement: () => listRef.current,
    estimateSize: (i) => estimateCardHeight,
  });

  return (
    <div
      ref={listRef}
      style={{ height: "88vh", overflow: "auto" }}
      data-testid="virtual-list"
      className="mt-2 h-screen"
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          height: `${virtualizedList.getTotalSize()}px`,
        }}
      >
        <PatienList
          patients={patients}
          isLoading={isLoading}
          isError={isError}
          virtualizedList={virtualizedList}
        />
      </div>
    </div>
  );
};

export default PatientListScroller;
