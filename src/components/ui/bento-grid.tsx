import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-300 hover:bg-[#104382] hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none cursor-default",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="group-hover/bento:text-blue-200 transition-colors">
          {icon}
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 group-hover/bento:text-white transition-colors">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 group-hover/bento:text-blue-100 transition-colors">
          {description}
        </div>
      </div>
    </div>
  );
};
