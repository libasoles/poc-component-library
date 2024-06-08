import PatientList from "@/components/PatientList";
import "@/styles/global.css";

export const metadata = {
  title: "Patients",
};

export default async function Page() {
  return (
    <main>
      <h1>Patients</h1>
      <PatientList />
    </main>
  );
}
