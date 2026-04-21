import React from "react";
import { Search, ChevronDown } from "lucide-react";

interface JobFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  departmentFilter: string;
  setDepartmentFilter: (dept: string) => void;
  workTypeFilter: string;
  setWorkTypeFilter: (type: string) => void;
  locationFilter: string;
  setLocationFilter: (loc: string) => void;
  departments: string[];
  workTypes: string[];
  locations: string[];
}

export const JobFilters: React.FC<JobFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  departmentFilter,
  setDepartmentFilter,
  workTypeFilter,
  setWorkTypeFilter,
  locationFilter,
  setLocationFilter,
  departments,
  workTypes,
  locations,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-12">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
          <Search className="w-5 h-5 text-slate-400" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Filter roles</h3>
          <p className="text-sm text-slate-500">Find the best match in seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Department Filter */}
        <div className="relative">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            <option value="All Departments">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Work Type Filter */}
        <div className="relative">
          <select
            value={workTypeFilter}
            onChange={(e) => setWorkTypeFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            <option value="All Work Types">All Work Types</option>
            {workTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Location Filter */}
        <div className="relative">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
          >
            <option value="All Locations">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search by role title or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>
    </div>
  );
};
