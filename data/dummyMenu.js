import { IconUserWrite, IconLockPassword, IconShirt, IconSignOut } from "../assets/icons";

export const menus = [
   {
      id: 1,
      nama: "Edit Profile",
      gambar: <IconUserWrite />,
      halaman: "EditProfile",
   },
   {
      id: 2,
      nama: "Change Password",
      gambar: <IconLockPassword />,
      halaman: "ChangePassword",
   },
   {
      id: 3,
      nama: "History Pemesanan",
      gambar: <IconShirt />,
      halaman: "History",
   },
   {
      id: 4,
      nama: "Sign Out",
      gambar: <IconSignOut />,
      halaman: "Login",
   },
];
