import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

export const DataNavDashboard = [
  {
    title: "Dashboard",
    path: "/admin-dashboard",
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Database",
    icon: <FaIcons.FaServer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Berita",
        path: "database/berita",
        icon: <HiIcons.HiServer />,
      },
      {
        title: "Galeri",
        path: "database/galeri",
        icon: <HiIcons.HiServer />,
      },
      {
        title: "Sekolah",
        path: "database/sekolah",
        icon: <HiIcons.HiServer />,
      },
    ],
  },
  {
    title: "Perangkat Pembelajaran",
    icon: <FaIcons.FaSwatchbook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Silabus",
        path: "perangkat-pembelajaran/silabus",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "RPP",
        path: "perangkat-pembelajaran/rpp",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "KKM",
        path: "perangkat-pembelajaran/kkm",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "Prota",
        path: "perangkat-pembelajaran/prota",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "Promes",
        path: "perangkat-pembelajaran/promes",
        icon: <FaIcons.FaBook />,
      },
    ],
  },
  {
    title: "Bank Soal",
    icon: <RiIcons.RiClipboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Pendidikan Agama",
        path: "bank-soal/pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PKN",
        path: "bank-soal/pkn",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Indonesia",
        path: "bank-soal/bahasa-indonesia",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Matematika",
        path: "bank-soal/matemaatika",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPA",
        path: "bank-soal/ipa",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPS",
        path: "bank-soal/ips",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PJOK",
        path: "bank-soal/pjok",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "SBdP",
        path: "bank-soal/sbdp",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Inggris",
        path: "bank-soal/bahasa-inggris",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Sunda",
        path: "bank-soal/bahasa-sunda",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Data Siswa",
    icon: <ImIcons.ImProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Kelas 1",
        path: "data-siswa-kelas-1",
        icon: <RiIcons.RiNumber1 />,
      },
      {
        title: "Kelas 2",
        path: "data-siswa-kelas-2",
        icon: <RiIcons.RiNumber2 />,
      },
      {
        title: "Kelas 3",
        path: "data-siswa-kelas-3",
        icon: <RiIcons.RiNumber3 />,
      },
      {
        title: "Kelas 4",
        path: "data-siswa-kelas-4",
        icon: <RiIcons.RiNumber4 />,
      },
      {
        title: "Kelas 5",
        path: "data-siswa-kelas-5",
        icon: <RiIcons.RiNumber5 />,
      },
      {
        title: "Kelas 6",
        path: "data-siswa-kelas-6",
        icon: <RiIcons.RiNumber6 />,
      },
    ],
  },
  {
    title: "DaftarNiai",
    icon: <ImIcons.ImBooks />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ulangan Harian",
        path: "daftar-nilai/ulangan-harian",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Pekan Ulangan",
        path: "daftar-nilai/pekan-ulangan",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian tengah Semester",
        path: "daftar-nilai/penilaian-tengah-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Semester",
        path: "daftar-nilai/penilaian-akhir-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Tahun",
        path: "daftar-nilai/penilaian-akhir-tahun",
        icon: <RiIcons.RiBook3Fill />,
      },
    ],
  },
];

export const DataNavDashboardUser = [
  {
    title: "Dashboard",
    path: "/user-dashboard",
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Perangkat Pembelajaran",
    icon: <FaIcons.FaSwatchbook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Silabus",
        path: "perangkat-pembelajaran/silabus",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "RPP",
        path: "perangkat-pembelajaran/rpp",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "KKM",
        path: "perangkat-pembelajaran/kkm",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "Prota",
        path: "perangkat-pembelajaran/prota",
        icon: <FaIcons.FaBook />,
      },
      {
        title: "Promes",
        path: "perangkat-pembelajaran/promes",
        icon: <FaIcons.FaBook />,
      },
    ],
  },
  {
    title: "Bank Soal",
    icon: <RiIcons.RiClipboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Pendidikan Agama",
        path: "bank-soal/pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PKN",
        path: "bank-soal/pkn",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Indonesia",
        path: "bank-soal/bahasa-indonesia",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Matematika",
        path: "bank-soal/matemaatika",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPA",
        path: "bank-soal/ipa",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPS",
        path: "bank-soal/ips",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PJOK",
        path: "bank-soal/pjok",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "SBdP",
        path: "bank-soal/sbdp",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Inggris",
        path: "bank-soal/bahasa-inggris",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Sunda",
        path: "bank-soal/bahasa-sunda",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Data Siswa",
    icon: <ImIcons.ImProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Kelas 1",
        path: "data-siswa-kelas-1",
        icon: <RiIcons.RiNumber1 />,
      },
      {
        title: "Kelas 2",
        path: "data-siswa-kelas-2",
        icon: <RiIcons.RiNumber2 />,
      },
      {
        title: "Kelas 3",
        path: "data-siswa-kelas-3",
        icon: <RiIcons.RiNumber3 />,
      },
      {
        title: "Kelas 4",
        path: "data-siswa-kelas-4",
        icon: <RiIcons.RiNumber4 />,
      },
      {
        title: "Kelas 5",
        path: "data-siswa-kelas-5",
        icon: <RiIcons.RiNumber5 />,
      },
      {
        title: "Kelas 6",
        path: "data-siswa-kelas-6",
        icon: <RiIcons.RiNumber6 />,
      },
    ],
  },
  {
    title: "DaftarNiai",
    icon: <ImIcons.ImBooks />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Ulangan Harian",
        path: "daftar-nilai/ulangan-harian",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Pekan Ulangan",
        path: "daftar-nilai/pekan-ulangan",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian tengah Semester",
        path: "daftar-nilai/penilaian-tengah-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Semester",
        path: "daftar-nilai/penilaian-akhir-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Tahun",
        path: "daftar-nilai/penilaian-akhir-tahun",
        icon: <RiIcons.RiBook3Fill />,
      },
    ],
  },
];
