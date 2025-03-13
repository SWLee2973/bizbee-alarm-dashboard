"use client";

import { useApps } from "@/hooks/useApps";
import { IAppsListResponse } from "@/types/apps-type";
import { api } from "@/utils";
import Link from "next/link";
import React, { Suspense } from "react";

function Apps() {
  const { data, isLoading } = useApps();

  console.log("data : ", data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="">
        <div className="card bg-base-300 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-lg">앱</h2>
            {data?.map((app) => (
              <p key={app.id}>{app.name}</p>
            ))}
            <div className="justify-end card-actions">
              <Link href="/management/add-app" className="btn btn-primary">
                앱 추가
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default Apps;
