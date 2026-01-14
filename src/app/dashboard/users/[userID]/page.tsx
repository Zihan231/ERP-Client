import axios from "axios";
import { cookies } from "next/headers";
import React from "react";
import {
  PiUserCircleFill,
  PiMapPinFill,
  PiPhoneFill,
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiShieldCheckFill,
} from "react-icons/pi";
interface UserProfile {
  id: number;
  fullName: string;
  github: string;
  address: string;
  phone: string;
  login: {
    id: number;
    email: string;
    role: string;
    locked: boolean;
    attempts: number;
  };
  securityProfile: any;
}
const fetchData = async (userID): Promise<UserProfile> => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  try {
    const res = await axios.get(`http://localhost:3000/admin/users/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data) {
      return res.data;
    }
  } catch {
    console.log("Error in fetching user profile data");
  }
};
const UserProfile = async ({ params }) => {
  const { userID } = await params;
  let userData: UserProfile;
  try {
    userData = await fetchData(userID);
  } catch {
    console.log("error");
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* --- Header --- */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-base-content">User Profile</h2>
        <p className="text-base-content/60">Manage personal details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Left Column: Identity Card --- */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-sm border border-base-200 h-full">
            <div className="card-body items-center text-center justify-center p-8">
              {/* Name & Role */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-bold text-base-content capitalize">
                  {userData.fullName}
                </h3>
                <div className="badge badge-primary badge-outline capitalize gap-1 px-3 py-3">
                  <PiShieldCheckFill />
                  {userData.login.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Details & Actions --- */}
        <div className="lg:col-span-2">
          {/* Personal Information Card */}
          <div className="card bg-base-100 shadow-sm border border-base-200 h-full">
            <div className="card-body p-6">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <PiUserCircleFill className="text-blue-600" />
                  Personal Information
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="form-control">
                  <label className="label text-xs font-semibold text-base-content/50 uppercase">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 text-base-content/80 font-medium bg-base-50 p-3 rounded-lg border border-base-100">
                    <PiEnvelopeSimpleFill className="w-5 h-5 text-base-content/40" />
                    {userData.login.email}
                  </div>
                </div>

                {/* Phone */}
                <div className="form-control">
                  <label className="label text-xs font-semibold text-base-content/50 uppercase">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 text-base-content/80 font-medium bg-base-50 p-3 rounded-lg border border-base-100">
                    <PiPhoneFill className="w-5 h-5 text-base-content/40" />
                    {userData.phone}
                  </div>
                </div>

                {/* Address */}
                <div className="form-control">
                  <label className="label text-xs font-semibold text-base-content/50 uppercase">
                    Location
                  </label>
                  <div className="flex items-center gap-3 text-base-content/80 font-medium bg-base-50 p-3 rounded-lg border border-base-100">
                    <PiMapPinFill className="w-5 h-5 text-base-content/40" />
                    {userData.address}
                  </div>
                </div>

                {/* GitHub */}
                <div className="form-control">
                  <label className="label text-xs font-semibold text-base-content/50 uppercase">
                    GitHub Profile
                  </label>
                  <a
                    href={userData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 transition-colors p-3 rounded-lg border border-blue-100 cursor-pointer"
                  >
                    <PiGithubLogoFill className="w-5 h-5" />
                    <span>github.com/zihan231</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
