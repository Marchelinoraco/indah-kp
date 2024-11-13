import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Profil",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Sejarah Pemadam Kebakaran",
        newTab: false,
        path: "/sejarah-pemadam",
      },
      {
        id: 35,
        title: "Tupoksi",
        newTab: false,
        path: "/tupoksi",
      },
      {
        id: 36,
        title: "Struktur Organisasi",
        newTab: false,
        path: "/struktur-organisasi",
      },
      {
        id: 34,
        title: "Identitas Logo",
        newTab: false,
        path: "/identitas-logo",
      },
    ],
  },
  {
    id: 2.3,
    title: "Inventaris",
    newTab: false,
    path: "/iventaris",
  },
  {
    id: 3,
    title: "Berita Dan Pengumuman",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Berita Pemuda",
        newTab: true,
        path: "berita-pemuda",
      },
      {
        id: 34,
        title: "Berita Olahraga",
        newTab: true,
        path: "berita-olahraga",
      },
    ],
  },

  {
    id: 4,
    title: "Kontak",
    newTab: false,
    path: "/kontak",
  },
];

export default menuData;
