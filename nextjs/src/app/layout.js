"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { useReducer } from "react";
import { AuthContext, AuthDispatchContext } from "./_contexts/authContext";
import { authReducer } from "./_reducers/authReducer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsFeed App",
  description: "Generated by georgetheprogrammer@gmail.com",
};
export default function RootLayout({ children }) {
  const token = localStorage.getItem("token");
  let defaultAuthState = { user: {}, token: token ?? "" };

  const [authState, dispatch] = useReducer(authReducer, defaultAuthState);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={authState}>
          <AuthDispatchContext.Provider value={dispatch}>
            <Header />
            {children}
          </AuthDispatchContext.Provider>
        </AuthContext.Provider>
      </body>
    </html>
  );
}
