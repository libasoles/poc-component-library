import { useVirtualizer } from "@tanstack/react-virtual";
import { Patient } from "types/Patient";

export const createVirtualizedList = (patients: Patient[]) =>
  ({
    getVirtualItems: jest.fn(() => {
      return new Array(patients.length).fill(0).map((_, index) => ({
        key: index,
        index,
        size: 100,
        start: index * 100,
      }));
    }),
    virtualizedList: jest.fn(() => 100),
  } as unknown as ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>);
