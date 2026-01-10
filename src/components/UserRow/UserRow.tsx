"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2
import {
  PiTrash,
  PiGithubLogoFill,
  PiMapPinFill,
  PiPhoneFill,
  PiUserCircleFill,
  PiCaretDownBold,
  PiSpinnerGap
} from "react-icons/pi";

const getRoleStyle = (role: string | null) => {
  switch (role?.toLowerCase()) {
    case "admin": return "bg-red-100/80 text-red-700 hover:bg-red-200";
    case "hr":    return "bg-purple-100/80 text-purple-700 hover:bg-purple-200";
    case "pm":    return "bg-emerald-100/80 text-emerald-700 hover:bg-emerald-200";
    case "dev":   return "bg-blue-100/80 text-blue-700 hover:bg-blue-200";
    default:      return "bg-slate-100 text-slate-600 hover:bg-slate-200";
  }
};

const UserRow = ({ user }: { user: any }) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // HANDLE ROLE UPDATE 
  const handleRoleChange = async (newRole: string) => {
    // 1. Confirm First
    const result = await Swal.fire({
      title: "Change User Role?",
      text: `Are you sure you want to change ${user.fullName}'s role to "${newRole}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0094F7", 
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    });

    if (!result.isConfirmed) {
        router.refresh(); 
        return;
    }

    setIsUpdating(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) { 
          Swal.fire("Error", "No authentication token found.", "error");
          return; 
      }

      await axios.put(
        `http://localhost:3000/admin/updateRole/${user.id}?newRole=${newRole}`, 
        {}, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Success Alert
      Swal.fire({
        title: "Updated!",
        text: "User role has been updated successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });

      router.refresh(); 

    } catch (error: any) {
      console.error("Update failed:", error);
      Swal.fire("Error", error.response?.data?.message || "Failed to update role.", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  // HANDLE DELETE USER 
  const handleDeleteUser = async () => {
    // 1. Confirm Delete
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${user.fullName}. This cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete user!"
    });

    if (!result.isConfirmed) return;

    setIsDeleting(true);

    try {
        const token = localStorage.getItem("token");
        if (!token) { 
            Swal.fire("Error", "No authentication token found.", "error");
            return; 
        }

        await axios.delete(
            `http://localhost:3000/admin/delete/${user.id}`, 
            { headers: { Authorization: `Bearer ${token}` } }
        );

        // Success Alert
        await Swal.fire({
            title: "Deleted!",
            text: "User has been removed from the system.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });

        router.refresh();

    } catch (error: any) {
        console.error("Delete failed:", error);
        Swal.fire("Error", error.response?.data?.message || "Failed to delete user.", "error");
    } finally {
        setIsDeleting(false);
    }
  };

  return (
    <tr className="hover:bg-blue-50/30 transition-colors duration-200 group">
      <td className="pl-6 py-4">
        <div>
          <div className="font-bold text-base-content text-base">{user.fullName}</div>
          <div className="text-sm text-base-content/50">{user.email}</div>
          {user.github ? (
            <a href={`${user.github}`} target="_blank" className="flex items-center gap-1 text-xs text-blue-600 mt-1 hover:underline w-fit">
              <PiGithubLogoFill /> {user.github}
            </a>
          ) : (
            <span className="flex items-center gap-1 text-xs text-base-content/30 mt-1 italic select-none">
              <PiUserCircleFill /> No Github
            </span>
          )}
        </div>
      </td>

      <td className="w-40">
        <div className="relative group/select">
          <select
            disabled={isUpdating || isDeleting}
            className={`
                select select-sm w-full max-w-35 
                appearance-none outline-none border-none shadow-sm 
                rounded-full font-semibold text-xs tracking-wide cursor-pointer 
                pl-4 pr-8 py-0 h-9 min-h-0 
                transition-all duration-200 ease-in-out 
                focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 
                ${getRoleStyle(user.role)}
                ${isUpdating ? "opacity-50 cursor-wait" : ""}
            `}
            defaultValue={user.role || "dev"} 
            onChange={(e) => handleRoleChange(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
            <option value="pm">PM</option>
            <option value="dev">Dev</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-current opacity-60">
            {isUpdating ? <PiSpinnerGap className="w-3 h-3 animate-spin" /> : <PiCaretDownBold className="w-3 h-3" />}
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <PiPhoneFill className="text-blue-400" />
          {user.phone || <span className="text-base-content/30 italic">N/A</span>}
        </div>
      </td>

      <td>
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <PiMapPinFill className="text-red-400" />
          <span className="truncate max-w-37.5">{user.address || "Unknown"}</span>
        </div>
      </td>

      {/* Actions (DELETE BUTTON) */}
      <td className="text-right pr-6">
        <button 
            onClick={handleDeleteUser}
            disabled={isDeleting || isUpdating}
            className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 hover:border-red-200 disabled:bg-transparent" 
            title="Remove User"
        >
          {isDeleting ? (
             <PiSpinnerGap className="w-5 h-5 animate-spin" />
          ) : (
             <PiTrash className="w-5 h-5" />
          )}
          <span className="hidden md:inline text-xs">
            {isDeleting ? "Deleting..." : "Remove"}
          </span>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;