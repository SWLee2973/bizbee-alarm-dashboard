import { IRoute } from "@/types/route-type";

export const links: IRoute[] = [
  {
    name: "대시보드",
    href: "/dashboard",
  },
  {
    name: "프로젝트",
    href: "/projects",
    children: [
      {
        name: "프로젝트 목록",
        href: "/projects/project-list",
      },
      {
        name: "프로젝트 관리",
        href: "/projects/management",
      },
      {
        name: "알림 발송",
        href: "/projects/send-message",
      },
    ],
  },
  {
    name: "사용자 관리",
    href: "/users",
  },
];
