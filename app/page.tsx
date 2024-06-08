import PatientList from "@/components/PatientList";
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
    <>
      <h1 className="text-3xl">Patients</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <PatientList />
      </HydrationBoundary>
    </>
  );
}
