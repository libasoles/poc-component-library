"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useFetchPatients } from "api/useFetchPatients";
import { useEffect, useRef } from "react";
import PatienList from "./PatientList";

const estimateCardHeight = 200;

const PatientListScroller = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const { data: patients, isLoading, isError } = useFetchPatients();

  const count = patients?.length || 0;

  const virtualizedList = useVirtualizer({
    count,
    getScrollElement: () => listRef.current,
    estimateSize: (i) => estimateCardHeight,
  });

  useEffect(() => {
    // TODO: there's still an issue when deleting an expanded card
    virtualizedList.measure();
  }, [virtualizedList]);

  return (
    <div
      ref={listRef}
      style={{ height: "88vh", overflow: "auto" }}
      data-testid="virtual-list"
      className="mt-2 h-screen"
    >
      <section
        className="max-w-screen-md mx-auto"
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
      </section>
    </div>
  );
};

export default PatientListScroller;
