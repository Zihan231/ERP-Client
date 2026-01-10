import UserRow from "@/components/UserRow/UserRow";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { PiPlus } from "react-icons/pi";

interface UserList {
  id: number;
  fullName: string;
  github: string;
  address: string;
  phone: string;
  email: string;
  role: string | null;
}

const fetchData = async (): Promise<UserList[]> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";
  try {
    const response = await axios.get<UserList[]>(
      "http://localhost:3000/admin/allUsers",
      {
        headers: {
          // Using your hardcoded token as requested
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Fetch Error:", err);
    throw new Error("Failed to fetch user data");
  }
};

const UserManagement = async () => {
  let userData: UserList[] = [];
  let error = false;

  try {
    userData = await fetchData();
  } catch (err) {
    error = true;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-base-content">User Directory</h2>
          <p className="text-base-content/60">Manage system access and roles.</p>
        </div>
        <Link
          href="/dashboard/create-user"
          className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg shadow-blue-500/30 gap-2"
        >
          <PiPlus className="w-5 h-5" />
          Create User
        </Link>
      </div>

      {/* Table */}
      <div className="bg-base-100 rounded-2xl shadow-xl shadow-blue-100/50 border border-base-200 overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="table w-full align-middle">
            <thead className="bg-base-50/80 text-base-content/60 font-medium uppercase text-xs tracking-wider border-b border-base-200">
              <tr>
                <th className="py-4 pl-6">User Details</th>
                <th>Access Role</th>
                <th>Contact Info</th>
                <th>Location</th>
                <th className="text-right pr-6">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-base-200">
              {/* Error State */}
              {error ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-red-500 font-medium">
                    Failed to load user data.
                  </td>
                </tr>
              ) : userData?.length > 0 ? (
                // Client Component
                userData.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))
              ) : (
                // Empty State
                <tr>
                  <td colSpan={5} className="text-center py-10 text-base-content/50">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;