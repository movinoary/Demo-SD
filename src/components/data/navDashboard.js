import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

export const DataNavDashboard = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Database",
    icon: <AiIcons.AiFillDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Anggaran",
        path: "/dashboard/profile",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Berita Sekolah",
        path: "/dashboard/berita-sekolah/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Berita Umum",
        path: "/dashboard/berita-umum/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Data Sekolah Beranda",
        path: "/dashboard/data-sekolah/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Fasilitas Beranda",
        path: "/dashboard/fasilitas-sekolah/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Kegiatan Beranda",
        path: "/dashboard/kegiatan-sekolah/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Kegiatan Galeri",
        path: "/dashboard/kegiatan-galeri/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Profil Guru",
        path: "/dashboard/profil-guru/get",
        icon: <FaIcons.FaDatabase />,
      },
      {
        title: "Video Youtube",
        path: "/dashboard/video-youtube/get",
        icon: <FaIcons.FaDatabase />,
      },
    ],
  },
  {
    title: "Perangkat Pembelajaran",
    icon: <RiIcons.RiComputerFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Silabus",
        path: "/dashboard/silabus",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "RPP",
        path: "/dashboard/rpp",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "KKM",
        path: "/dashboard/kkm",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Prota",
        path: "/dashboard/prota",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Promes",
        path: "/dashboard/promes",
        icon: <FaIcons.FaClipboardList />,
      },
    ],
  },
  {
    title: "Bank Soal",
    icon: <AiIcons.AiFillDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Pendidikan Agama",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PKN",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Indonesia",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Matematika",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPA",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "IPS",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "PJOK",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "SBdP",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Inggris",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <FaIcons.FaClipboardList />,
      },
      {
        title: "Bahasa Sunda",
        path: "/dashboard/bank-soal-pendidikan-agama",
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
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <RiIcons.RiNumber1 />,
      },
      {
        title: "Kelas 2",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <RiIcons.RiNumber2 />,
      },
      {
        title: "Kelas 3",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <RiIcons.RiNumber3 />,
      },
      {
        title: "Kelas 4",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <RiIcons.RiNumber4 />,
      },
      {
        title: "Kelas 5",
        path: "/dashboard/bank-soal-pendidikan-agama",
        icon: <RiIcons.RiNumber5 />,
      },
      {
        title: "Kelas 6",
        path: "/dashboard/bank-soal-pendidikan-agama",
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
        path: "/dashboard/ulangan-harian",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Pekan Ulangan",
        path: "/dashboard/pekan-ulangan",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian tengah Semester",
        path: "/dashboard/penilaian-tengah-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Semester",
        path: "/dashboard/penilaian-akhir-semester",
        icon: <RiIcons.RiBook3Fill />,
      },
      {
        title: "Penilaian Akhir Tahun",
        path: "/dashboard/penilaian-akhir-tahun",
        icon: <RiIcons.RiBook3Fill />,
      },
    ],
  },
];
