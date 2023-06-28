import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();

  const fetch = useAuthenticatedFetch();

  const getShopinfo = async () => {
    const res = await fetch("/api/shop-info");
    const json = await res.json();
    if (res.ok) {
      console.log("Shop all info", json);
    } else {
      console.log("Error during getting shop info: ", json);
    }
  };

  const getMetaobjects = async () => {
    const res = await fetch("/api/all");
    const json = await res.json();
    if (res.ok) {
      console.log(json);

      const metaObjects = [];
      json.edges.forEach(({ node }) => {
        metaObjects.push(node);
      });
      console.log(metaObjects);
    } else {
      console.log(json);
    }
  };

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            test
            <button onClick={getShopinfo}>getSHopInfo</button>
            <button onClick={getMetaobjects}>get first 250 metaobjects</button>
          </Card>
        </Layout.Section>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}
