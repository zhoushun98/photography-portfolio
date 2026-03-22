export type Category = "all" | "mountains" | "ocean" | "forest" | "starscape" | "sunset";

export interface Photo {
  id: string;
  src: string;
  title: string;
  description: string;
  category: Category;
  width: number;
  height: number;
  featured?: boolean;
}

export const categories: { key: Category; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "mountains", label: "山岳" },
  { key: "ocean", label: "海洋" },
  { key: "forest", label: "森林" },
  { key: "starscape", label: "星空" },
  { key: "sunset", label: "日落" },
];

export const photos: Photo[] = [
  {
    id: "1",
    src: "/photos/mountain-dawn.jpg",
    title: "晨曦初照",
    description: "日出时分的雪山金顶，万物苏醒",
    category: "mountains",
    width: 1920,
    height: 1280,
    featured: true,
  },
  {
    id: "2",
    src: "/photos/ocean-cliff.jpg",
    title: "海崖听涛",
    description: "浪花拍打悬崖，大海的呼吸",
    category: "ocean",
    width: 1920,
    height: 1280,
    featured: true,
  },
  {
    id: "3",
    src: "/photos/forest-mist.jpg",
    title: "雾锁深林",
    description: "晨雾中的原始森林，如梦似幻",
    category: "forest",
    width: 1920,
    height: 1440,
    featured: true,
  },
  {
    id: "4",
    src: "/photos/milky-way.jpg",
    title: "银河拱桥",
    description: "深夜旷野上空的银河弧光",
    category: "starscape",
    width: 1920,
    height: 1280,
    featured: true,
  },
  {
    id: "5",
    src: "/photos/sunset-lake.jpg",
    title: "湖畔余晖",
    description: "落日将湖面染成金色",
    category: "sunset",
    width: 1920,
    height: 1280,
  },
  {
    id: "6",
    src: "/photos/mountain-ridge.jpg",
    title: "山脊之上",
    description: "连绵起伏的山脊线，云海翻涌",
    category: "mountains",
    width: 1920,
    height: 1280,
  },
  {
    id: "7",
    src: "/photos/ocean-sunset.jpg",
    title: "海上日落",
    description: "海平线上最后一抹霞光",
    category: "ocean",
    width: 1920,
    height: 1440,
  },
  {
    id: "8",
    src: "/photos/autumn-forest.jpg",
    title: "秋色斑斓",
    description: "深秋森林的色彩交响曲",
    category: "forest",
    width: 1920,
    height: 1280,
  },
  {
    id: "9",
    src: "/photos/star-trails.jpg",
    title: "星轨如丝",
    description: "长曝光下的星空旋转轨迹",
    category: "starscape",
    width: 1920,
    height: 1280,
  },
  {
    id: "10",
    src: "/photos/golden-hour.jpg",
    title: "金色时刻",
    description: "黄金时段的光线魔法",
    category: "sunset",
    width: 1920,
    height: 1280,
  },
  {
    id: "11",
    src: "/photos/snow-peak.jpg",
    title: "雪峰连天",
    description: "冬日的高山雪景，纯净无垠",
    category: "mountains",
    width: 1920,
    height: 1440,
  },
  {
    id: "12",
    src: "/photos/deep-forest.jpg",
    title: "林深不知处",
    description: "阳光穿透树冠洒落的光斑",
    category: "forest",
    width: 1920,
    height: 1280,
  },
];
