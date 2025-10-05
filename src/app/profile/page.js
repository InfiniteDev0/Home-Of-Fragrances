"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LogOut,
  Edit3,
  Save,
  X,
  MapPin,
  UploadCloud,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { avatar } from "../assets/images/images";

const ProfilePage = () => {
  const { user, logout, updateUserProfile, fetchUserDetails } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Profile fields matching your backend structure
  const [profileData, setProfileData] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    country: "",
    city: "",
    gender: "",
    building: "",
    houseNumber: "",
    streetName: "",
  });

  // Fetch user details from DB after login
  useEffect(() => {
    console.log("Current user object:", user); // Debug log

    if (!user) {
      console.log("No user found, redirecting to auth");
      router.push("/auth");
      return;
    }

    // Set profile data directly from user object since it matches backend structure
    setProfileData({
      displayName: user.displayName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      photoURL: user.photoURL || "",
      country: user.country || "",
      city: user.city || "",
      gender: user.gender || "",
      building: user.building || "",
      houseNumber: user.houseNumber || "",
      streetName: user.streetName || "",
    });
  }, [user, router]);

  // Handlers
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      await updateUserProfile(profileData);
      setEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // UI Variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Show loading state while user is being verified
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  // Profile banner UI
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Banner */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Image
              src={profileData.photoURL || avatar}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full border-2 border-gray-100 object-cover"
            />
            {/* Edit button on avatar */}
            {editing && (
              <Button
                variant="outline"
                size="sm"
                className="absolute bottom-0 right-0"
                type="button"
              >
                <UploadCloud className="w-4 h-4 mr-1" />
                Upload new picture
              </Button>
            )}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 capitalize">
            {profileData.displayName || "User"}
          </h2>
          <span className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {profileData.city && profileData.country
              ? `${profileData.city}, ${profileData.country}`
              : "Location not set"}
          </span>
          <div className="flex flex-row gap-2 mt-4">
            {!editing ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditing(true)}
              >
                <Edit3 className="w-4 h-4 mr-1" /> Edit Profile
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  onClick={handleSaveProfile}
                  disabled={loading}
                >
                  <Save className="w-4 h-4 mr-1" />
                  {loading ? "Saving..." : "Save"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditing(false)}
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
              </>
            )}
            <Button
              variant="secondary"
              size="sm"
              className="ml-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <Button variant="ghost" size="sm">
            Work
          </Button>
          <Button variant="ghost" size="sm">
            Services
          </Button>
          <Button variant="ghost" size="sm" className="relative">
            Boosted Shots
            <span className="absolute -top-2 -right-8 text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
              NEW
            </span>
          </Button>
          <Button variant="ghost" size="sm">
            Collections
          </Button>
          <Button variant="ghost" size="sm">
            Liked Shots
          </Button>
          <Button variant="ghost" size="sm">
            About
          </Button>
        </div>
        <hr />

        {/* Edit profile details */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Edit sidebar */}
          <div className="min-w-[200px]">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start">
                General
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start font-semibold text-black"
              >
                Edit Profile
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Password
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Social Profiles
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Email Notifications
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Billing
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Data Export
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start text-red-600"
              >
                Delete Account
              </Button>
            </nav>
          </div>
          {/* Main edit content */}
          <div className="flex-1 bg-white rounded-lg shadow p-8">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveProfile();
              }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={profileData.photoURL || avatar}
                  alt="Avatar"
                  width={60}
                  height={60}
                  className="rounded-full border object-cover"
                />
                {editing && (
                  <Button variant="outline" size="sm" type="button">
                    <UploadCloud className="w-4 h-4 mr-1" />
                    Upload new picture
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  className="ml-auto text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
              {/* Name (full name) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  name="displayName"
                  value={profileData.displayName}
                  onChange={handleInputChange}
                  disabled={!editing}
                  placeholder="Full name (e.g. John Doe)"
                  className="max-w-md"
                  required
                />
              </div>
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Input
                  name="city"
                  value={profileData.city}
                  onChange={handleInputChange}
                  disabled={!editing}
                  placeholder="e.g. Nairobi"
                  className="max-w-md"
                />
                <Input
                  name="country"
                  value={profileData.country}
                  onChange={handleInputChange}
                  disabled={!editing}
                  placeholder="e.g. Kenya"
                  className="max-w-md mt-2"
                />
              </div>
              {/* Phone & Gender */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    name="phoneNumber"
                    type="tel"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="e.g. +254700000000"
                    className="max-w-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <Input
                    name="gender"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="e.g. Male"
                    className="max-w-md"
                  />
                </div>
              </div>
              {/* Email (readonly) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  name="email"
                  value={profileData.email}
                  disabled
                  className="max-w-md bg-gray-50"
                />
              </div>
              {/* Save button only when editing */}
              {editing && (
                <Button
                  type="submit"
                  size="sm"
                  className="mt-4"
                  disabled={loading}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
