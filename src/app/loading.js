// install shadcn from documentation
// install shadcn skeleton component

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Skeleton />
    </div>
  );
};

export default Loading;
