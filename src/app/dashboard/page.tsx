import { PiShieldCheckFill, PiUserPlusFill, PiEnvelopeSimpleOpenFill } from "react-icons/pi";
import { cookies } from "next/headers";
import React from "react";
import { PiClockFill } from "react-icons/pi";
import axios from "axios";
import Link from "next/link";
interface logs {
  id: number;
  oppositeUserID: number;
  oppositeUserName: string;
  action: string;
  executionDate: string;
}
const fetchData = async (): Promise<logs[]> => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  try {
    const res = await axios.get("http://localhost:3000/admin/activity?recent=true", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data) {
      return res.data;
    }
  } catch {
    console.log("Error");
  }
};
const Dashboard = async () => {
    let data: logs[] = [];
  try {
    data = await fetchData();
    console.log(data);
  } catch {
    console.log("error");
  }
  
  // Helper to format date
  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper to determine Badge Color based on action text content
  const getBadgeClass = (actionText) => {
    const text = actionText.toLowerCase();

    if (text.includes("create") || text.includes("add")) return "badge-success"; // Green
    if (
      text.includes("delete") ||
      text.includes("remove") ||
      text.includes("locked")
    )
      return "badge-error"; // Red
    if (text.includes("admin") || text.includes("role")) return "badge-warning"; // Yellow/Orange

    return "badge-info"; // Blue (Default)
  };
    return (
        <div>
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-base-content">System Overview</h2>
                    <p className="text-base-content/60">Manage users, security protocols, and system access.</p>
                </div>
                <div className="flex gap-3">
                    {/* Quick Actions */}
                    <button className="btn bg-base-100 border border-base-300 shadow-sm hover:bg-base-50 gap-2">
                        <PiEnvelopeSimpleOpenFill className="w-4 h-4" />
                        Send Email
                    </button>
                    <Link href={'dashboard/create-user'} className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/30 gap-2">
                        <PiUserPlusFill className="w-4 h-4" />
                        Create User
                    </Link>
                </div>
            </div>

            

            {/* Recent Admin Activity Table */}
            <div className="mt-8 bg-base-100 rounded-2xl shadow-sm border border-base-200 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Recent Admin Activity</h3>
                    <Link href={"dashboard/logs"} className="btn btn-ghost btn-xs text-blue-600">View All Logs</Link>
                </div>

                <div className="overflow-x-auto">
                          <table className="table">
                            {/* Head */}
                            <thead>
                              <tr className="bg-base-50/50 text-base-content/60 border-b border-base-200">
                                <th className="py-4">User Details</th>
                                <th className="py-4">Action Type</th>
                                <th className="py-4">Date & Time</th>
                                <th className="py-4 text-right">Log ID</th>
                              </tr>
                            </thead>
                
                            {/* Body */}
                            <tbody>
                              {data.map((log) => (
                                <tr
                                  key={log.id}
                                  className="hover:bg-base-50 transition-colors border-b border-base-100 last:border-none"
                                >
                                  {/* Column 1: User (Name/ID only) */}
                                  <td>
                                    <div>
                                      <div className="font-bold">{log.oppositeUserName}</div>
                                      <div className="text-xs opacity-50">
                                        ID: {log.oppositeUserID}
                                      </div>
                                    </div>
                                  </td>
                
                                  {/* Column 2: Action Badge */}
                                  <td>
                                    {/* Pass the action text directly to get the color */}
                                    <span
                                      className={`badge badge-outline ${getBadgeClass(
                                        log.action
                                      )} btn-sm h-auto py-1 font-medium`}
                                    >
                                      {log.action}
                                    </span>
                                  </td>
                
                                  {/* Column 3: Date */}
                                  <td className="text-sm text-base-content/70">
                                    <div className="flex items-center gap-2">
                                      <PiClockFill className="text-base-content/30" />
                                      {formatDate(log.executionDate)}
                                    </div>
                                  </td>
                
                                  {/* Column 4: ID */}
                                  <td className="text-right">
                                    <span className="text-xs font-mono opacity-50 bg-base-200 px-2 py-1 rounded">
                                      #{log.id}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
            </div>
        </div>
    );
};

export default Dashboard;