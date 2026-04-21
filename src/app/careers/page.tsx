"use client";

import React, { useState, useMemo } from "react";
import { CareersHero } from "@/components/shared/careers/CareersHero";
import { JobFilters } from "@/components/shared/careers/JobFilters";
import { JobCard } from "@/components/shared/careers/JobCard";
import { careersData } from "@/data/careers";

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [workTypeFilter, setWorkTypeFilter] = useState("All Work Types");
  const [locationFilter, setLocationFilter] = useState("All Locations");

  // Extract unique filter options
  const departments = useMemo(() => Array.from(new Set(careersData.map(j => j.department))), []);
  const workTypes = useMemo(() => Array.from(new Set(careersData.map(j => j.type))), []);
  const locations = useMemo(() => Array.from(new Set(careersData.map(j => j.location))), []);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return careersData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = departmentFilter === "All Departments" || job.department === departmentFilter;
      const matchesType = workTypeFilter === "All Work Types" || job.type === workTypeFilter;
      const matchesLoc = locationFilter === "All Locations" || job.location === locationFilter;
      
      return matchesSearch && matchesDept && matchesType && matchesLoc;
    });
  }, [searchQuery, departmentFilter, workTypeFilter, locationFilter]);

  // Group by department
  const groupedJobs = useMemo(() => {
    const groups: Record<string, typeof careersData> = {};
    filteredJobs.forEach(job => {
      if (!groups[job.department]) groups[job.department] = [];
      groups[job.department].push(job);
    });
    return groups;
  }, [filteredJobs]);

  return (
    <main className="min-h-screen bg-white font-sans">
      <CareersHero />

      <section id="open-positions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Open Positions</h2>
            <p className="text-slate-500 text-lg">Open a role to view the full JD, stipend/details, and apply instantly.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm font-semibold shrink-0">
            Showing {filteredJobs.length} roles
          </div>
        </div>

        <JobFilters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          workTypeFilter={workTypeFilter}
          setWorkTypeFilter={setWorkTypeFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          departments={departments}
          workTypes={workTypes}
          locations={locations}
        />

        {Object.keys(groupedJobs).length === 0 ? (
          <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No roles found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setDepartmentFilter("All Departments");
                setWorkTypeFilter("All Work Types");
                setLocationFilter("All Locations");
              }}
              className="mt-6 text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(groupedJobs).map(([dept, jobs]) => (
              <div key={dept} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">{dept}</h3>
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{jobs.length} role{jobs.length > 1 ? 's' : ''}</span>
                </div>
                
                <div className="space-y-4">
                  {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
