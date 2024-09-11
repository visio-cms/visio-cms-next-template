export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import config from "@/visio.config";
import Page from "./[locale]/[...slug]/page";
import { generateMetadata as gePageMeta } from "./[locale]/[...slug]/page";
const defaultLocale = config.defaultLanguage.locale;

export async function generateMetadata() {
  return await gePageMeta({
    params: { slug: ["index"], locale: defaultLocale },
  });
}

export default function IndexPage() {
  return <Page params={{ slug: ["index"], locale: defaultLocale }} />;
}
