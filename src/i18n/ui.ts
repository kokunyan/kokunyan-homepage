export const languages = {
  en: "English",
  ru: "Русский",
  jp: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.href": "/en/",
    "nav.name": "🐤 Bogdan Kokunin",
    "nav.posts": "Posts",
    "nav.about": "About",
    "nav.works": "Works",
    "works.works": "Main works",
    "works.art": "Other creative endeavours",
    "about.first": "Born in 1999",
    "about.second": "Other creative endeavours",
  },
  ru: {
    "nav.href": "/ru/",
    "nav.name": "🐤 Богдан Кокунин",
    "nav.posts": "Посты",
    "nav.about": "О мне",
    "nav.works": "Работы",
    "works.works": "Основные работы",
    "works.art": "Прочее творчество",
  },
  jp: {
    "nav.href": "/jp/",
    "nav.name": "🐤 コクニン・ボグダン",
    "nav.posts": "記事",
    "nav.about": "私",
    "nav.works": "作品",
    "works.works": "主な作品",
    "works.art": "その他",
  },
} as const;
