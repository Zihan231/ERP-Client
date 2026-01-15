"use client";

import React, { useContext, useEffect } from "react";
import Pusher from "pusher-js";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from '@/context/AuthContext';

const NotificationListener = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.id) return;

    const pusher = new Pusher("d8d37b2683fe84deb2e5", {
      cluster: "ap2",
    });
    const channelName = `user-${user.id}`;
    const channel = pusher.subscribe(channelName);

    channel.bind("email-sent-event", (data: any) => {
      toast.success(data.message, {
        duration: 5000,
        position: "top-right",
        style: {
          border: "1px solid #10B981",
          padding: "16px",
          color: "#064E3B",
          background: "#ECFDF5",
        },
      });
    });

    return () => {
      channel.unbind_all(); 
      pusher.unsubscribe(channelName); 
    };
  }, [user?.id]); 

  return <Toaster />;
};
export default NotificationListener;