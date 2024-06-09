import Column from "@/components/generic/layout/Column";
import Row from "@/components/generic/layout/Row";

const PatientCardSkeleton = () => {
  return (
    <li className="mt-6 p-4 bg-zinc-800 rounded-lg shadow-lg list-none transition-all">
      <div className="animate-pulse h-34">
        <Row className="space-x-4">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>

          <Column className="flex-1 space-y-4 justify-center">
            <div className="h-2 bg-slate-700 rounded w-40"></div>
            <div className="h-2 bg-slate-700 rounded w-60"></div>
          </Column>
        </Row>

        <div className="space-y-3 mt-6">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>

        <Row className="space-x-6 justify-end">
          <div className="h-2 bg-slate-700 rounded w-10 mt-6 self-end"></div>
          <div className="h-2 bg-slate-700 rounded w-16 mt-6 self-end"></div>
        </Row>
      </div>
    </li>
  );
};

const PatientListLoading = ({ amount = 5 }) => {
  return [...Array(amount)].map((_, index) => (
    <PatientCardSkeleton key={index} />
  ));
};

export default PatientListLoading;
