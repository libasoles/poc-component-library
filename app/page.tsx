import PatientList from "@/components/PatientList";
import "@/styles/global.css";
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
    <main>
      <h1>Patients</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PatientList />
      </HydrationBoundary>
    </main>
  );
}
