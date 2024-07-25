/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "../blocks/Image/Image";
import styles from "./PageCreator.module.scss";
import Button from "../UI/Button/Button";
import { Text, Paragraph } from "../UI";
import { PiSmileySad } from "react-icons/pi";
import ImageSettingsModal from "./settingsModals/ImageSettingsModal/ImageSettingsModal";
import ListSettingsModal from "./settingsModals/ListSettingsModal/ListSettingsModal";
import List from "../blocks/List/List";
import HeroSection from "../blocks/HeroSection/HeroSection";
import HeroSectionSettingsModal from "./settingsModals/HeroSectionSettingsModal/HeroSectionSettingsModal";
import Footer from "../blocks/Footer/Footer";
import FooterSettingsModal from "./settingsModals/FooterSettingsModal/FooterSettingsModal";

const PageCreator = () => {
  const [components, setComponents] = useState<
    {
      type: string;
      id: number;
      styles?: React.CSSProperties;
      title?: string;
      description?: string;
      content: string[];
      position: { x: number; y: number };
      draggable: boolean;
      links?: any;
      contacts?: any;
    }[]
  >([]);
  const [chosenComponent, setChosenComponent] = useState<string>();
  const [sidebarModal, setSideBarModel] = useState<React.ReactNode>();

  const deleteComponent = (index: number) => {
    setComponents((prev) => prev.filter((_component, i) => i !== index));
  };

  const createComponent = (type: string, props: any) => {
    switch (chosenComponent) {
      case "image":
        setComponents((prev) => [
          ...prev,
          {
            type,
            id: Date.now(),
            styles: props.styles,
            content: props.content,
            position: { x: 0, y: 0 },
            draggable: props.draggable,
          },
        ]);
        break;
      case "list":
        setComponents((prev) => [
          ...prev,
          {
            type,
            id: Date.now(),
            styles: props.styles,
            content: props.content,
            title: props.title,
            position: { x: 0, y: 0 },
            draggable: props.draggable,
          },
        ]);
        break;
      case "heroSection":
        setComponents((prev) => [
          ...prev,
          {
            type,
            id: Date.now(),
            content: props.content,
            title: props.title,
            description: props.description,
            position: { x: 0, y: 0 },
            draggable: props.draggable,
          },
        ]);
        break;
      default:
        break;
    }
  };

  const updatePosition = (id: number, position: { x: number; y: number }) => {
    setComponents(
      components.map((component) =>
        component.id === id ? { ...component, position } : component
      )
    );
  };

  const getComponent = (component: {
    type: string;
    id: number;
    styles?: React.CSSProperties;
    title?: string;
    description?: string;
    content: string[];
    position: { x: number; y: number };
    draggable: boolean;
    links?: any;
    contacts?: any;
  }) => {
    switch (component.type) {
      case "image":
        return (
          <Image
            onStop={(_e, data) =>
              updatePosition(component.id, { x: data.x, y: data.y })
            }
            styles={component.styles}
            key={component.id}
            src={component.content[0]}
            alt={"" + component.id}
            draggable={component.draggable}
          />
        );
      case "list":
        return (
          <List
            onStop={(_e, data) =>
              updatePosition(component.id, { x: data.x, y: data.y })
            }
            style={component.styles}
            key={component.id}
            content={component.content}
            draggable={component.draggable}
            title={component.title as string}
          />
        );
      case "heroSection":
        return (
          <HeroSection
            key={component.id}
            imageSrc={component.content[0]}
            description={component.description as string}
            title={component.title as string}
          />
        );
      case "footer":
        return (
          <Footer
            key={component.id}
            links={component.links}
            contacts={component.contacts}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!chosenComponent) return;

    switch (chosenComponent) {
      case "image":
        setSideBarModel(
          <ImageSettingsModal createComponent={createComponent} />
        );
        break;
      case "list":
        setSideBarModel(
          <ListSettingsModal createComponent={createComponent} />
        );
        break;
      case "heroSection":
        setSideBarModel(
          <HeroSectionSettingsModal createComponent={createComponent} />
        );
        break;
      case "footer":
        setSideBarModel(
          <FooterSettingsModal createComponent={createComponent} />
        );
        break;
      default:
        break;
    }
  }, [chosenComponent]);

  return (
    <div className={styles.pageCreator}>
      <div className={styles.sideBar}>{sidebarModal}</div>
      <header className={styles.header}>
        <Button size="small" onClick={() => setChosenComponent("list")}>
          Add List
        </Button>
        <Button size="small" onClick={() => setChosenComponent("image")}>
          Add image
        </Button>
        <Button size="small" onClick={() => setChosenComponent("footer")}>
          Add Footer
        </Button>
        <Button size="small" onClick={() => setChosenComponent("heroSection")}>
          Add Hero Section
        </Button>
      </header>
      <div className={styles.mainBox}>
        {components.length ? (
          components.map((component, index) => {
            return (
              <div className={styles.componentWrapper}>
                {getComponent(component)}
                <button
                  className={styles.removeButton}
                  onClick={() => deleteComponent(index)}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.placeholder}>
            <Paragraph>
              <Text>Пока здесь ничего нет</Text>
            </Paragraph>
            <div className={styles.iconWrapper}>
              <PiSmileySad />
            </div>
            <Paragraph fontSize="medium">
              Вы можете сотворить сайт{" "}
              <Text underline status="warning">
                любого
              </Text>{" "}
              цвета, при условии, что он{" "}
              <Text underline status="warning">
                черный
              </Text>
              .
            </Paragraph>
            <Paragraph>
              <Text>
                <br />© Генри Форд
              </Text>
            </Paragraph>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default PageCreator;
