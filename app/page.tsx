import Column from "@/components/generic/layout/Column";
import Row from "@/components/generic/layout/Row";
import NewPatientButton from "@/components/sections/NewPatientButton";
import PatientListScroller from "@/components/sections/PatientList/PatientListScroller";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPatients, patientsQueryKey } from "api/useFetchPatients";

export const metadata = {
  title: "Patients",
};

export default async function PatientsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [patientsQueryKey],
    queryFn: fetchPatients,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Column>
        <Row>
          <h1 className="text-3xl">Patient Records</h1>
          <NewPatientButton />
        </Row>
        <PatientListScroller />
      </Column>
    </HydrationBoundary>
  );
}
