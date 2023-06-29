import { LegacyCard, Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";
import { metaobjectDefinition } from "../../constants/metaobject-definition";
import { metaobjectSettings } from "../../constants/metaobject";
import { Metaobject } from "../components/metaobject";
import { MetaobjectDefinition } from "../components/metaobject-definition";

export default function HomePage() {
  const { t } = useTranslation();

  const fetch = useAuthenticatedFetch();

  const [metaobjects, setMetaobjects] = useState([]);
  const [metaobjectDefinitions, setMetaobjectDefinitions] = useState([]);

  const getMetaobjects = async () => {
    const res = await fetch("/api/metaobjects/all");
    const json = await res.json();
    if (res.ok) {
      // console.log(json);

      const metaObjects = [];
      json.edges.forEach(({ node }) => {
        metaObjects.push(node);
      });
      setMetaobjects(metaObjects);
      // console.log(metaObjects);
    } else {
      console.log(json);
    }
  };

  const getMetaobjectDefinitions = async () => {
    const res = await fetch("/api/metaobject-definitions/all");
    const json = await res.json();
    if (res.ok) {
      // console.log("ok", json);
      const metaObjectDefinitions = [];
      json.edges.forEach(({ node }) => {
        metaObjectDefinitions.push(node);
      });
      console.log(metaObjectDefinitions);
      setMetaobjectDefinitions(metaObjectDefinitions);
    } else {
      console.log(json);
    }
  };

  const initMetaobjectDefinitions = async () => {
    const res = await fetch("/api/metaobject-definitions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metaobjectDefinition),
    });
    const json = await res.json();

    if (res.ok) {
      console.log(json);
      // todo -  check if userErrors not []. because it is doesnt go to block catch
    } else {
      console.log(json);
    }
  };

  const initMetaobjects = async () => {
    const res = await fetch("/api/metaobjects/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metaobjectSettings),
    });
    const json = await res.json();

    if (res.ok) {
      console.log(json);
      // todo -  check if userErrors not []. because it is doesnt go to block catch
    } else {
      console.log(json);
    }
  };

  useEffect(() => {
    getMetaobjectDefinitions();
  }, []);
  useEffect(() => {
    getMetaobjects();
  }, [metaobjectDefinitions]);

  // todo - first we get only main info. after click at detail info - we fetch detail info
  // todo - fetch metaobjects by category/ fetch if start by prefix or contains

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <div>
              <button onClick={getMetaobjectDefinitions}>get first</button>
            </div>
            <div>
              First
              <button onClick={initMetaobjectDefinitions}>
                Init base metaobject definitions
              </button>
            </div>
            <div>
              Second
              <button onClick={initMetaobjects}>Init base metaobjects</button>
            </div>

            {metaobjectDefinitions.length > 0 && (
              <div>
                Metaobject Definitions (Base)
                <ul>
                  {metaobjectDefinitions.map((el) => (
                    <MetaobjectDefinition key={el.id} {...el} />
                  ))}
                </ul>
              </div>
            )}
            {metaobjects.length > 0 && (
              <div>
                Metaobjects
                <ul>
                  {metaobjects.map((el) => (
                    <Metaobject key={el.id} {...el} />
                  ))}
                </ul>
              </div>
            )}
          </LegacyCard>
        </Layout.Section>
        <Layout.Section></Layout.Section>
      </Layout>
    </Page>
  );
}
