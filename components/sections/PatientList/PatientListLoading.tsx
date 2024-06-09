const PatientCardSkeleton = () => {
  return (
    <li className="mt-6 p-4 bg-zinc-800 rounded-lg shadow-lg">
      <div className="animate-pulse h-34">
        <div className=" flex space-x-4">
          <div className="rounded-full bg-slate-700 h-12 w-12"></div>

          <div className="flex flex-col flex-1 space-y-4  justify-center">
            <div className="h-2 bg-slate-700 rounded w-40"></div>
            <div className="h-2 bg-slate-700 rounded w-60"></div>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>

        <div className="h-2 bg-slate-700 rounded w-20 mt-6"></div>
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
